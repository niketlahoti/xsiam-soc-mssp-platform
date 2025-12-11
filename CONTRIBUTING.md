# Contributing to XSIAM SOC MSSP Platform

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/xsiam-soc-mssp-platform.git
   cd xsiam-soc-mssp-platform
   ```
3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Development Workflow

### Setup Development Environment

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development servers
npm run dev
```

### Code Style

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add comments for complex logic

### Commit Message Format

```
type(scope): subject

body

footer
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Example:**
```
feat(incidents): Add automated analysis trigger

Implemented automatic AI analysis when new incidents are fetched
from XSIAM API. Analysis runs in background queue.

Closes #123
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run specific test suite
npm run test:backend
npm run test:frontend

# Run with coverage
npm run test:coverage
```

## 📦 Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new features
3. **Ensure all tests pass**
4. **Update CHANGELOG.md**
5. **Submit PR** with clear description

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] Tests added/updated and passing
- [ ] Documentation updated
- [ ] No console.log statements
- [ ] No commented-out code
- [ ] Branch is up to date with main

## 🐛 Bug Reports

When reporting bugs, include:

- **Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: OS, Node version, etc.
- **Screenshots**: If applicable

## 💡 Feature Requests

When requesting features, include:

- **Use Case**: Why is this needed?
- **Proposed Solution**: How should it work?
- **Alternatives**: Other approaches considered
- **Additional Context**: Any other relevant info

## 🔒 Security Issues

**DO NOT** open public issues for security vulnerabilities.

Email security concerns to: security@example.com

## 📚 Documentation

- Update README.md for user-facing changes
- Update API.md for API changes
- Add JSDoc comments for functions
- Update architecture diagrams if needed

## 🎨 UI/UX Contributions

- Follow existing design patterns
- Ensure responsive design
- Test on multiple browsers
- Include screenshots in PR

## 🌐 Internationalization

- Use i18n for all user-facing text
- Add translations for new strings
- Test with different locales

## 📊 Performance

- Profile code for performance issues
- Optimize database queries
- Minimize bundle size
- Use lazy loading where appropriate

## 🤝 Code Review

All submissions require review. We use GitHub pull requests for this purpose.

**Reviewers will check:**
- Code quality and style
- Test coverage
- Documentation
- Performance implications
- Security considerations

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Your contributions make this project better for everyone!

---

**Questions?** Open a discussion or reach out to the maintainers.
