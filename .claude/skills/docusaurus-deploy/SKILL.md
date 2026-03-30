---
name: docusaurus-deploy
description: |
  Deploy Docusaurus projects to GitHub Pages and other platforms with intelligent configuration, CI/CD automation, and troubleshooting. Use this skill whenever a user mentions deploying a Docusaurus site, setting up GitHub Pages, fixing deployment failures, configuring GitHub Actions workflows, or migrating between hosting platforms. This skill handles initial setup, troubleshooting failed deployments, optimizing existing configurations, and multi-platform migrations. It auto-discovers project files, asks clarifying questions, generates or fixes deployment workflows, updates configurations, and provides educational explanations of issues and solutions.
---

# Docusaurus Deployment Skill

Deploy Docusaurus projects reliably to GitHub Pages and other platforms with intelligent configuration management, automated CI/CD setup, and comprehensive troubleshooting.

## What This Skill Does

- **Auto-discovers** your project structure and configuration files
- **Asks clarifying questions** to understand your deployment goals and constraints
- **Diagnoses issues** in existing deployments with detailed explanations
- **Generates or fixes** GitHub Actions workflows for automated deployment
- **Updates Docusaurus configuration** (docusaurus.config.js) for proper deployment
- **Provides deployment guides** with step-by-step instructions
- **Explains problems** so you understand what went wrong and why
- **Supports multiple platforms** (GitHub Pages primary, extensible to Vercel, Netlify, AWS)

## When to Use This Skill

Use this skill when you need to:

- **Set up Docusaurus deployment for the first time** — initial GitHub Pages configuration
- **Fix a failing deployment** — diagnose build errors, workflow issues, or configuration problems
- **Optimize existing deployment** — improve build times, fix base URL issues, update workflows
- **Migrate to a different platform** — move from GitHub Pages to Vercel/Netlify or vice versa
- **Configure custom domains** — set up CNAME records and domain configuration
- **Troubleshoot GitHub Actions** — debug workflow failures and CI/CD issues

## Skill Workflow

### Phase 1: Discovery and Analysis

The skill begins by auto-discovering your project:

1. **Scan project structure** for:
   - `docusaurus.config.js` — main configuration
   - `package.json` — dependencies and scripts
   - `.github/workflows/` — existing CI/CD workflows
   - `docs/` directory structure
   - Current deployment status

2. **Ask clarifying questions** about:
   - Your deployment goal (initial setup, fix, optimize, migrate)
   - GitHub repository details (owner, name, branch strategy)
   - Current issues or pain points
   - Desired deployment platform
   - Custom domain requirements
   - Build and deployment preferences

### Phase 2: Diagnosis and Planning

Based on discovery, the skill will:

1. **Analyze current configuration** for issues
2. **Identify deployment blockers** (missing config, incorrect settings, workflow problems)
3. **Propose solutions** with explanations of why changes are needed
4. **Create an action plan** tailored to your situation

### Phase 3: Implementation

The skill generates or updates:

1. **GitHub Actions workflow** (`.github/workflows/deploy.yml`)
   - Automated builds on push/PR
   - Deployment to GitHub Pages or other platforms
   - Error notifications and status checks

2. **Docusaurus configuration** updates if needed
   - Correct `baseUrl` for your deployment
   - Proper `url` setting
   - GitHub Pages specific settings
   - Custom domain configuration

3. **Deployment guide** with:
   - Step-by-step setup instructions
   - Verification steps to confirm deployment works
   - Troubleshooting common issues
   - Links to relevant documentation

### Phase 4: Verification and Troubleshooting

The skill helps you:

1. **Verify deployment** is working correctly
2. **Troubleshoot any issues** that arise
3. **Optimize performance** if needed
4. **Provide educational explanations** of what went wrong and why

## Information the Skill Gathers

The skill uses adaptive questioning to gather:

### Upfront (Comprehensive Interview)
- Deployment goal and current status
- GitHub repository details (owner, name, visibility)
- Current issues or error messages
- Desired deployment platform
- Custom domain requirements

### Progressive (Based on Answers)
- Build preferences (Node version, build command, output directory)
- Deployment branch strategy (main, gh-pages, separate branch)
- Environment variables or secrets needed
- Performance requirements

### Just-in-Time (As Needed)
- Specific configuration details when analyzing issues
- Platform-specific settings when migrating
- Custom requirements for special use cases

## Supported Deployment Platforms

### Primary: GitHub Pages
- Automatic deployment from GitHub repository
- Free hosting for public repositories
- Custom domain support
- GitHub Actions integration

### Secondary: Vercel
- Serverless deployment
- Automatic preview deployments
- Custom domains and SSL
- Environment variables

### Secondary: Netlify
- Git-based deployment
- Continuous deployment from GitHub
- Custom domains and SSL
- Build environment configuration

### Extensible: AWS, Azure, Google Cloud
- Architecture supports adding additional platforms
- Similar workflow patterns apply

## Key Configuration Files

### docusaurus.config.js
The skill ensures these settings are correct:

```javascript
{
  url: "https://your-domain.com",           // Your site's full URL
  baseUrl: "/repo-name/",                   // Base path (for GitHub Pages)
  organizationName: "your-org",             // GitHub organization
  projectName: "repo-name",                 // GitHub repository name
  deploymentBranch: "gh-pages",             // Branch for GitHub Pages
  trailingSlash: false,                     // URL trailing slash behavior
}
```

### GitHub Actions Workflow
The skill generates a workflow that:

1. Triggers on push to main branch
2. Installs dependencies
3. Builds the Docusaurus site
4. Deploys to GitHub Pages (or other platform)
5. Reports status and errors

## Common Issues the Skill Solves

### Build Failures
- Missing dependencies
- Incorrect Node version
- Build script errors
- Memory issues during build

### Deployment Failures
- Incorrect `baseUrl` configuration
- Missing GitHub Pages settings
- Workflow permission issues
- Branch configuration problems

### Configuration Issues
- Wrong `url` or `baseUrl`
- Incorrect `organizationName` or `projectName`
- Missing custom domain setup
- Trailing slash inconsistencies

### GitHub Actions Issues
- Workflow syntax errors
- Missing permissions or secrets
- Incorrect branch triggers
- Token or authentication problems

## Educational Approach

When the skill identifies issues, it provides:

1. **What went wrong** — clear description of the problem
2. **Why it happened** — root cause explanation
3. **How to fix it** — step-by-step solution
4. **How to prevent it** — best practices and tips
5. **Related concepts** — links to documentation and learning resources

This helps you understand deployment concepts and become more self-sufficient with future deployments.

## Output Checklist

The skill delivers:

- [ ] Analyzed project configuration and identified issues
- [ ] Clarified deployment goals and requirements
- [ ] Generated or updated GitHub Actions workflow
- [ ] Updated Docusaurus configuration if needed
- [ ] Provided step-by-step deployment guide
- [ ] Explained all changes and why they're needed
- [ ] Verified deployment works correctly
- [ ] Provided troubleshooting guide for common issues

## Next Steps After Using This Skill

1. **Review generated files** — understand what was created/changed
2. **Commit changes** — add workflow and config updates to git
3. **Push to GitHub** — trigger the deployment workflow
4. **Monitor first deployment** — watch GitHub Actions for success
5. **Verify site is live** — check your deployed Docusaurus site
6. **Test custom domain** (if applicable) — verify domain points to site
7. **Bookmark troubleshooting guide** — reference if issues arise later

## Limitations and Scope

This skill focuses on:
- ✅ Docusaurus v2 and v3
- ✅ GitHub Pages (primary)
- ✅ Vercel, Netlify (secondary)
- ✅ Standard deployment scenarios
- ✅ Common configuration issues

This skill does NOT:
- ❌ Modify your documentation content
- ❌ Change your Docusaurus theme or styling
- ❌ Handle complex custom build processes
- ❌ Manage DNS or domain registrar settings
- ❌ Deploy to platforms not listed above

## Anti-Patterns

**Don't:**
- Manually edit generated workflows without understanding them
- Use hardcoded secrets in workflows (use GitHub Secrets instead)
- Deploy from multiple branches simultaneously
- Ignore build warnings — they often indicate future failures
- Skip the verification step after deployment

**Do:**
- Review all generated files before committing
- Use GitHub Secrets for sensitive information
- Test locally before pushing to GitHub
- Monitor GitHub Actions runs for errors
- Keep your Docusaurus version updated

## Common Error Patterns and Solutions

### 1. 404 Errors After Deployment
**Root Cause:** Incorrect `baseUrl` configuration
**Solution:**
- For GitHub Pages project: `baseUrl: '/repo-name/'`
- For custom domain: `baseUrl: '/'`
- Verify `url` matches your deployment destination

### 2. "Cannot find module" Errors
**Root Cause:** Missing dependencies or package-lock.json issues
**Solution:**
- Run `npm install` locally to verify dependencies
- Ensure `package-lock.json` is committed to git
- Verify Node version matches workflow (usually 18+)

### 3. Build Timeout Issues
**Root Cause:** Large project or insufficient memory in CI environment
**Solution:**
- Increase Node memory: `NODE_OPTIONS=--max-old-space-size=4096 npm run build`
- Optimize images and assets
- Use build caching in workflow

### 4. Permission Denied in Workflows
**Root Cause:** Insufficient token permissions
**Solution:**
- Check GitHub Actions permissions in repo settings
- Verify `GITHUB_TOKEN` has write access
- For Vercel/Netlify: check API token is valid

## Best Practices for Reliable Deployments

1. **Test Locally First:** Always build and serve locally before pushing
2. **Commit Dependencies:** Ensure `package-lock.json` is committed
3. **Use GitHub Secrets:** Store sensitive information in GitHub Secrets
4. **Monitor Builds:** Watch GitHub Actions for errors
5. **Verify Configuration:** Double-check `docusaurus.config.js` before deployment
6. **Document Settings:** Keep deployment settings in README for team members

## Quick Reference Guide

### GitHub Pages Setup
```javascript
// For project repository (my-docs)
url: 'https://username.github.io/my-docs',
baseUrl: '/my-docs/',
deploymentBranch: 'gh-pages'

// For user/org repository (username.github.io)
url: 'https://username.github.io',
baseUrl: '/',
deploymentBranch: 'main'
```

### Vercel Deployment
```yaml
# vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "docusaurus"
}
```

### Netlify Deployment
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
