# 🌱 AgriMarket Pro - Transparent Vegetable Market Platform

[![CI/CD Pipeline](https://github.com/yourusername/agrimarket-pro/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/yourusername/agrimarket-pro/actions/workflows/ci-cd.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status.svg)](https://app.netlify.com/sites/enchanting-hummingbird-f6bdca/deploys)

A comprehensive platform connecting farmers, wholesalers, retailers, and consumers for transparent vegetable market pricing and fair trade opportunities across India.

## 🎯 **Project Objective**

AgriMarket Pro aims to eliminate black marketing and reduce inflation by providing:
- **Transparent pricing** across the entire supply chain
- **Direct connections** between farmers and buyers
- **Government-verified rates** for price comparison
- **Regional market insights** and analytics
- **Complaint system** directly connected to government bodies

## 🚀 **Live Demo**

- **Production:** [https://enchanting-hummingbird-f6bdca.netlify.app](https://enchanting-hummingbird-f6bdca.netlify.app)
- **Staging:** Available on develop branch deployments

## ✨ **Key Features**

### For All Users
- 🔍 **Market Overview** - Real-time pricing and availability
- 📊 **Price Comparison** - Regional pricing differences and inflation rates
- 🌐 **Multi-language Support** - Hindi, English, and regional languages
- 📱 **Responsive Design** - Works on all devices

### For Registered Users
- 👤 **Role-based Access** - Farmer, Wholesaler, Retailer, Civilian
- 📈 **Detailed Analytics** - Revenue tracking and market trends
- 🛒 **Bulk Ordering** - Commercial-scale vegetable booking
- 📋 **Complaint System** - Direct government body integration
- 🎯 **Personalized Dashboard** - Tailored market insights

### For Administrators
- 👥 **User Management** - Complete user record access
- 📊 **Comprehensive Reports** - Daily/monthly enrollment statistics
- 🔧 **System Monitoring** - Platform usage and performance metrics

## 🛠️ **Technology Stack**

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Build Tool:** Vite
- **Deployment:** Netlify
- **CI/CD:** GitHub Actions + Jenkins

## 🏃‍♂️ **Quick Start**

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/agrimarket-pro.git
   cd agrimarket-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔧 **Development Setup**

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_URL=your_api_url
VITE_APP_NAME=AgriMarket Pro
```

### Code Style
- ESLint configuration included
- Prettier recommended
- TypeScript strict mode enabled

## 🚀 **Deployment**

### Automatic Deployment
- **Staging:** Automatically deploys `develop` branch
- **Production:** Automatically deploys `main` branch

### Manual Deployment
```bash
npm run build
# Deploy dist/ folder to your hosting provider
```

## 🏗️ **CI/CD Pipeline**

### GitHub Actions
- ✅ Automated testing on multiple Node.js versions
- ✅ Code linting and security audits
- ✅ Automatic deployment to Netlify
- ✅ Health checks post-deployment

### Jenkins Integration
Complete Jenkins setup available in `/jenkins` directory:
```bash
cd jenkins/docker
docker-compose up -d
```

## 📊 **Project Structure**

```
agrimarket-pro/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── contexts/      # React contexts
│   ├── data/          # Mock data and constants
│   ├── types/         # TypeScript type definitions
│   └── main.tsx       # Application entry point
├── jenkins/           # Jenkins CI/CD configuration
├── .github/           # GitHub workflows and templates
└── public/            # Static assets
```

## 🤝 **Contributing**

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md).

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 **Functional Requirements**

### Core Features
1. ✅ **User Registration** - Complete market view with pricing data
2. ✅ **Guest Access** - Limited overview for non-registered users
3. ✅ **Complaint System** - Government-connected feedback mechanism
4. ✅ **Admin Dashboard** - Complete user record management
5. ✅ **Product Listings** - Quantity, availability, and pricing format
6. ✅ **Robust Database** - Handles online transactions efficiently
7. 🔄 **Multi-language** - Regional language support (In Progress)
8. ✅ **Regional Comparison** - Price differences and inflation rates
9. ✅ **Bulk Ordering** - Commercial-scale online booking
10. ✅ **Help Section** - User guidance and support

### Reporting Features
1. ✅ **Daily Enrollment Reports** - Admin dashboard
2. ✅ **Monthly State Reports** - Geographic enrollment tracking
3. ✅ **Usage Analytics** - Professional work hours monitoring

## 🐛 **Bug Reports & Feature Requests**

- **Bug Reports:** [Create an Issue](https://github.com/yourusername/agrimarket-pro/issues/new?template=bug_report.md)
- **Feature Requests:** [Request a Feature](https://github.com/yourusername/agrimarket-pro/issues/new?template=feature_request.md)

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- Government of India for agricultural market data
- Farmers and agricultural communities for insights
- Open source community for tools and libraries

## 📞 **Support**

- **Email:** support@agrimarket.gov.in
- **Phone:** 1800-AGRI-HELP
- **Documentation:** [Wiki](https://github.com/yourusername/agrimarket-pro/wiki)

---

**AgriMarket Pro** - Empowering transparent agriculture markets across India 🇮🇳