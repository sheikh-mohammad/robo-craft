# Deployment Troubleshooting Guide

## Build Failures

### Error: "Cannot find module"
**Symptoms:** Build fails with "Cannot find module 'X'"
**Root Cause:** Missing dependencies or incorrect installation
**Solution:**
1. Run `npm install` locally to verify dependencies
2. Check `package.json` for all required packages
3. Ensure `package-lock.json` is committed to git
4. Verify Node version matches workflow (usually 18+)

**Prevention:**
- Always commit `package-lock.json`
- Test build locally before pushing
- Keep dependencies updated

---

### Error: "Out of memory" during build
**Symptoms:** Build process killed or "JavaScript heap out of memory"
**Root Cause:** Large project or insufficient memory in CI environment
**Solution:**
1. Increase Node memory: `NODE_OPTIONS=--max-old-space-size=4096 npm run build`
2. Optimize images and assets
3. Split documentation into smaller sections
4. Use build caching in workflow

**Prevention:**
- Optimize images before committing
- Monitor build size regularly
- Use lazy loading for heavy content

---

### Error: "Build script not found"
**Symptoms:** "npm ERR! missing script: build"
**Root Cause:** `package.json` missing build script
**Solution:**
1. Check `package.json` has `"build": "docusaurus build"`
2. Verify script name matches workflow
3. For Docusaurus v2+, use `docusaurus build`

**Prevention:**
- Use standard Docusaurus setup
- Don't rename build script

---

## Deployment Failures

### Error: "404 Not Found" after deployment
**Symptoms:** Site deploys but pages show 404
**Root Cause:** Incorrect `baseUrl` configuration
**Solution:**
1. Check `docusaurus.config.js` baseUrl matches deployment path
2. For GitHub Pages project: `baseUrl: '/repo-name/'`
3. For custom domain: `baseUrl: '/'`
4. Rebuild and redeploy

**Prevention:**
- Test locally with correct baseUrl
- Use environment-specific config if needed
- Verify baseUrl in deployed site

---

### Error: "Assets not loading" (CSS/JS 404s)
**Symptoms:** Site loads but styling/scripts missing
**Root Cause:** baseUrl mismatch or incorrect asset paths
**Solution:**
1. Open browser DevTools → Network tab
2. Check asset URLs match baseUrl
3. Verify `docusaurus.config.js` baseUrl is correct
4. Clear browser cache and hard refresh (Ctrl+Shift+R)

**Prevention:**
- Test in incognito/private mode
- Verify all assets load locally
- Check baseUrl before deployment

---

### Error: "Deployment branch not found"
**Symptoms:** Workflow fails with "gh-pages branch not found"
**Root Cause:** Branch doesn't exist or wrong name
**Solution:**
1. Check GitHub repository settings
2. Verify `deploymentBranch` in config matches actual branch
3. Create branch if missing: `git checkout --orphan gh-pages`
4. Or use existing branch name

**Prevention:**
- Create deployment branch before first deploy
- Document branch name in README
- Use standard `gh-pages` name

---

### Error: "Permission denied" in workflow
**Symptoms:** Workflow fails with permission error
**Root Cause:** Insufficient token permissions
**Solution:**
1. Check GitHub Actions permissions in repo settings
2. Verify `GITHUB_TOKEN` has write access
3. For Vercel/Netlify: check API token is valid
4. Regenerate token if expired

**Prevention:**
- Use `secrets.GITHUB_TOKEN` (auto-generated)
- Store API tokens in GitHub Secrets
- Rotate tokens regularly

---

## Configuration Issues

### Issue: Site works locally but not deployed
**Symptoms:** `npm run build` works, but deployed site is broken
**Root Cause:** Environment differences or configuration mismatch
**Solution:**
1. Build locally with same Node version as CI
2. Check environment variables in workflow
3. Verify all config files are committed
4. Test with `npm run serve` after build

**Prevention:**
- Use same Node version locally and in CI
- Commit all configuration files
- Test build output locally
- Use `.env` files for local development only

---

### Issue: Custom domain not working
**Symptoms:** Custom domain doesn't resolve to site
**Root Cause:** DNS not configured or CNAME file missing
**Solution:**
1. Create `static/CNAME` with domain name
2. Configure DNS records (CNAME or A records)
3. Wait for DNS propagation (up to 48 hours)
4. Verify in GitHub Pages settings

**Prevention:**
- Create CNAME file before deploying
- Configure DNS before deployment
- Test DNS with `nslookup` or `dig`

---

### Issue: Trailing slash inconsistency
**Symptoms:** Some URLs work, others redirect or 404
**Root Cause:** `trailingSlash` setting mismatch
**Solution:**
1. Set `trailingSlash: false` (recommended)
2. Or set `trailingSlash: true` consistently
3. Rebuild and redeploy
4. Test all URLs

**Prevention:**
- Choose one setting and stick with it
- Document in project README
- Test URLs before deployment

---

## GitHub Actions Issues

### Issue: Workflow not triggering
**Symptoms:** Pushed code but workflow didn't run
**Root Cause:** Branch name mismatch or workflow disabled
**Solution:**
1. Check workflow file is in `.github/workflows/`
2. Verify branch name in `on.push.branches` matches
3. Check workflow is enabled in Actions tab
4. Verify syntax is correct (YAML)

**Prevention:**
- Use standard branch names (main, master)
- Enable workflows in repository settings
- Test workflow syntax before committing

---

### Issue: Workflow times out
**Symptoms:** Workflow runs for >1 hour and fails
**Root Cause:** Large build or infinite loop
**Solution:**
1. Check build logs for what's taking time
2. Optimize build process
3. Increase timeout if needed
4. Split into multiple jobs if possible

**Prevention:**
- Monitor build times
- Optimize images and assets
- Use caching for dependencies

---

## Platform Migration Issues

### Issue: Migration breaks existing deployment
**Symptoms:** Site becomes inaccessible after migration
**Root Cause:** Incorrect configuration for new platform
**Solution:**
1. Backup current configuration
2. Test migration in staging environment
3. Verify new platform settings match requirements
4. Update DNS records only after successful deployment

**Prevention:**
- Always test in staging first
- Keep backup of original configuration
- Document migration steps thoroughly

---

## Verification Checklist

After deployment, verify:

- [ ] Site loads at correct URL
- [ ] All pages accessible (no 404s)
- [ ] Styling and scripts load correctly
- [ ] Images display properly
- [ ] Links work correctly
- [ ] Search functionality works (if enabled)
- [ ] Mobile responsive design works
- [ ] Custom domain resolves (if applicable)
- [ ] HTTPS certificate valid
- [ ] No console errors in browser

---

## Getting Help

If issues persist:

1. **Check GitHub Actions logs** — most detailed error info
2. **Review workflow file** — syntax and configuration
3. **Test locally** — reproduce issue locally first
4. **Check Docusaurus docs** — official documentation
5. **Search issues** — GitHub issues for similar problems
6. **Ask for help** — provide logs and configuration

---

## Common Success Indicators

✅ Workflow completes in 2-5 minutes
✅ Build output shows "Build successful"
✅ Deployment shows "Deployed successfully"
✅ Site loads at correct URL
✅ All assets load without 404s
✅ No console errors in browser
✅ Mobile view works correctly

## Quick Fix Reference

### For 404 Errors:
- Check `baseUrl` matches deployment path
- Verify `url` setting is correct
- Confirm `deploymentBranch` exists
- Clear browser cache

### For Dependency Issues:
- Run `npm install` locally
- Commit `package-lock.json`
- Verify Node version
- Check for missing dependencies

### For Timeout Issues:
- Add `NODE_OPTIONS=--max-old-space-size=4096`
- Optimize build process
- Use caching strategies
- Split large builds

### For Permission Issues:
- Check GitHub Actions permissions
- Verify `GITHUB_TOKEN` has access
- Validate API tokens
- Check workflow syntax
