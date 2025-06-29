#!/bin/bash

# Jenkins Setup Script for AgriMarket Pro
echo "🚀 Setting up Jenkins for AgriMarket Pro..."

# Create Jenkins directory structure
mkdir -p jenkins/{docker,scripts,jobs}

# Set permissions
chmod +x jenkins/scripts/*.sh

echo "📋 Jenkins Setup Instructions:"
echo "================================"
echo ""
echo "1. Prerequisites:"
echo "   - Docker and Docker Compose installed"
echo "   - Git repository set up"
echo "   - Netlify account with site created"
echo ""
echo "2. Environment Setup:"
echo "   - Update docker-compose.yml with your SSH public key"
echo "   - Configure Netlify credentials in Jenkins"
echo ""
echo "3. Start Jenkins:"
echo "   cd jenkins/docker"
echo "   docker-compose up -d"
echo ""
echo "4. Access Jenkins:"
echo "   http://localhost:8080"
echo ""
echo "5. Configure Jenkins:"
echo "   - Install suggested plugins"
echo "   - Create admin user"
echo "   - Configure NodeJS plugin"
echo "   - Add Netlify credentials"
echo ""
echo "6. Create Pipeline Job:"
echo "   - New Item → Pipeline"
echo "   - Configure Git repository"
echo "   - Set Pipeline script from SCM"
echo ""
echo "✅ Jenkins setup files created successfully!"