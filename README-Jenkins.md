# Jenkins CI/CD Setup for AgriMarket Pro

This document provides comprehensive instructions for setting up Jenkins CI/CD pipeline for the AgriMarket Pro application.

## 🏗️ Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Developer     │    │     Jenkins     │    │    Netlify      │
│   Push Code     │───▶│   CI/CD Pipeline │───▶│   Deployment    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 📋 Prerequisites

- Docker and Docker Compose
- Git repository (GitHub/GitLab)
- Netlify account
- Basic understanding of Jenkins

## 🚀 Quick Start

### 1. Clone and Setup

```bash
# Clone your repository
git clone https://github.com/yourusername/agrimarket-pro.git
cd agrimarket-pro

# Make setup script executable
chmod +x jenkins/scripts/setup-jenkins.sh

# Run setup
./jenkins/scripts/setup-jenkins.sh
```

### 2. Start Jenkins

```bash
cd jenkins/docker
docker-compose up -d
```

### 3. Access Jenkins

Open http://localhost:8080 in your browser.

## 🔧 Configuration Steps

### Step 1: Initial Jenkins Setup

1. **Get Initial Admin Password:**
   ```bash
   docker exec agrimarket-jenkins cat /var/jenkins_home/secrets/initialAdminPassword
   ```

2. **Install Plugins:**
   - Select "Install suggested plugins"
   - Additional plugins will be installed from `plugins.txt`

3. **Create Admin User:**
   - Username: admin
   - Password: [secure password]
   - Email: your-email@domain.com

### Step 2: Configure Global Tools

1. **NodeJS Configuration:**
   - Go to: Manage Jenkins → Global Tool Configuration
   - Add NodeJS installation:
     - Name: `NodeJS`
     - Version: `18.x`
     - Install automatically: ✅

### Step 3: Configure Credentials

1. **GitHub Credentials:**
   - Go to: Manage Jenkins → Manage Credentials
   - Add GitHub personal access token:
     - ID: `github-credentials`
     - Description: `GitHub Access Token`

2. **Netlify Credentials:**
   - Add Netlify Site ID:
     - ID: `netlify-site-id`
     - Secret: `your-netlify-site-id`
   - Add Netlify Auth Token:
     - ID: `netlify-auth-token`
     - Secret: `your-netlify-auth-token`

### Step 4: Create Pipeline Job

1. **New Item:**
   - Name: `AgriMarket-Pro-Pipeline`
   - Type: `Pipeline`

2. **Configure Pipeline:**
   - Definition: `Pipeline script from SCM`
   - SCM: `Git`
   - Repository URL: `https://github.com/yourusername/agrimarket-pro.git`
   - Credentials: `github-credentials`
   - Branch: `*/main` and `*/develop`
   - Script Path: `Jenkinsfile`

## 🔄 Pipeline Stages

### 1. Checkout
- Pulls latest code from repository

### 2. Setup Node.js
- Configures Node.js environment

### 3. Install Dependencies
- Runs `npm ci` for clean install

### 4. Lint Code
- Runs ESLint for code quality

### 5. Build Application
- Creates production build

### 6. Run Tests
- Executes test suite (when configured)

### 7. Security Audit
- Checks for security vulnerabilities

### 8. Deploy to Staging
- Deploys `develop` branch to staging

### 9. Deploy to Production
- Deploys `main` branch to production

### 10. Health Check
- Verifies deployment success

## 📧 Notifications

The pipeline includes email notifications for:
- ✅ Successful builds
- ❌ Failed builds
- 📊 Build status changes

Configure email settings in:
`Manage Jenkins → Configure System → E-mail Notification`

## 🔒 Security Best Practices

1. **Credentials Management:**
   - Never store secrets in code
   - Use Jenkins credentials store
   - Rotate tokens regularly

2. **Access Control:**
   - Enable matrix-based security
   - Create role-based permissions
   - Use LDAP/SSO when possible

3. **Pipeline Security:**
   - Validate input parameters
   - Use approved script security
   - Audit pipeline changes

## 📊 Monitoring and Reporting

### Build Metrics
- Build success/failure rates
- Build duration trends
- Deployment frequency

### Quality Gates
- Code coverage thresholds
- Security vulnerability limits
- Performance benchmarks

## 🐛 Troubleshooting

### Common Issues

1. **Build Fails on Dependencies:**
   ```bash
   # Clear npm cache
   npm cache clean --force
   ```

2. **Netlify Deployment Fails:**
   - Verify site ID and auth token
   - Check build output directory
   - Validate Netlify CLI version

3. **Permission Issues:**
   ```bash
   # Fix Docker permissions
   sudo chown -R 1000:1000 jenkins_home/
   ```

### Debug Commands

```bash
# View Jenkins logs
docker logs agrimarket-jenkins

# Access Jenkins container
docker exec -it agrimarket-jenkins bash

# Check pipeline syntax
jenkins-cli declarative-linter < Jenkinsfile
```

## 🔄 Maintenance

### Regular Tasks

1. **Update Jenkins:**
   ```bash
   docker-compose pull
   docker-compose up -d
   ```

2. **Backup Configuration:**
   ```bash
   docker exec agrimarket-jenkins tar -czf /tmp/jenkins-backup.tar.gz /var/jenkins_home
   ```

3. **Clean Old Builds:**
   - Configure build retention policies
   - Archive important artifacts

## 📈 Advanced Features

### Multi-Branch Pipeline
- Automatic branch detection
- Feature branch deployments
- Pull request validation

### Blue-Green Deployment
- Zero-downtime deployments
- Automatic rollback capability
- Traffic switching

### Integration Testing
- End-to-end test automation
- Cross-browser testing
- Performance testing

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test locally
5. Submit pull request
6. Pipeline will automatically validate

## 📞 Support

For issues and questions:
- Create GitHub issue
- Check Jenkins logs
- Review pipeline documentation
- Contact DevOps team

---

**Note:** This setup is designed for the AgriMarket Pro application and follows best practices for React/Node.js applications with Netlify deployment.