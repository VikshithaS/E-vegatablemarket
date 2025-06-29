# Contributing to AgriMarket Pro

Thank you for your interest in contributing to AgriMarket Pro! This document provides guidelines and information for contributors.

## 🎯 **Project Mission**

AgriMarket Pro aims to create transparency in India's vegetable market by connecting farmers, wholesalers, retailers, and consumers through a unified platform that eliminates black marketing and promotes fair pricing.

## 🤝 **How to Contribute**

### Types of Contributions

1. **Code Contributions**
   - Bug fixes
   - New features
   - Performance improvements
   - UI/UX enhancements

2. **Documentation**
   - README improvements
   - Code comments
   - User guides
   - API documentation

3. **Testing**
   - Unit tests
   - Integration tests
   - User acceptance testing
   - Bug reporting

4. **Design**
   - UI/UX improvements
   - Accessibility enhancements
   - Mobile responsiveness

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+
- Git
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/yourusername/agrimarket-pro.git
   cd agrimarket-pro
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/original-owner/agrimarket-pro.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

## 📋 **Development Workflow**

### Branch Naming Convention
- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `hotfix/description` - Critical fixes
- `docs/description` - Documentation updates

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(auth): add farmer registration flow
fix(pricing): correct wholesale price calculation
docs(readme): update installation instructions
```

### Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic

3. **Test your changes**
   ```bash
   npm run lint
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat(component): add new feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Use the provided PR template
   - Provide clear description
   - Link related issues
   - Add screenshots if applicable

## 🎨 **Code Style Guidelines**

### TypeScript/React
- Use functional components with hooks
- Implement proper TypeScript typing
- Follow React best practices
- Use meaningful variable names

### CSS/Styling
- Use Tailwind CSS classes
- Follow mobile-first approach
- Maintain consistent spacing
- Use semantic color names

### File Organization
- Group related components
- Use index files for exports
- Keep components focused and small
- Separate business logic from UI

## 🧪 **Testing Guidelines**

### Writing Tests
- Write tests for new features
- Test edge cases
- Mock external dependencies
- Use descriptive test names

### Running Tests
```bash
npm test                 # Run all tests
npm run test:watch      # Watch mode
npm run test:coverage   # Coverage report
```

## 🐛 **Bug Reporting**

### Before Reporting
1. Check existing issues
2. Reproduce the bug
3. Test on different browsers/devices

### Bug Report Template
- **Description:** Clear bug description
- **Steps to Reproduce:** Detailed steps
- **Expected Behavior:** What should happen
- **Actual Behavior:** What actually happens
- **Environment:** Browser, OS, device
- **Screenshots:** If applicable

## 💡 **Feature Requests**

### Before Requesting
1. Check existing feature requests
2. Consider if it aligns with project goals
3. Think about implementation complexity

### Feature Request Template
- **Problem:** What problem does this solve?
- **Solution:** Proposed solution
- **Alternatives:** Other solutions considered
- **User Impact:** Who benefits from this?

## 🔍 **Code Review Process**

### For Contributors
- Be open to feedback
- Respond to review comments
- Make requested changes promptly
- Ask questions if unclear

### For Reviewers
- Be constructive and respectful
- Focus on code quality and functionality
- Suggest improvements
- Approve when ready

## 📚 **Resources**

### Documentation
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

### Tools
- [VS Code](https://code.visualstudio.com/) - Recommended editor
- [React Developer Tools](https://react.dev/learn/react-developer-tools)
- [Git](https://git-scm.com/doc)

## 🏆 **Recognition**

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

## 📞 **Getting Help**

- **GitHub Issues:** Technical questions
- **Discussions:** General questions and ideas
- **Email:** support@agrimarket.gov.in

## 📄 **License**

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing to AgriMarket Pro! Together, we're building a more transparent and fair agricultural market for India. 🌱