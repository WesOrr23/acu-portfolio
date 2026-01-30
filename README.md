# ACU Portfolio - Wesley Orr

A portfolio website showcasing my academic journey, projects, and experiences at Abilene Christian University.

## Structure

- **4 Academic Assignments**: ITC110, SWE1, Embedded Systems, AI
- **2 Co-curricular Activities**: Sing Song Leadership, Debate Team
- **2 Extra-curricular Activities**: UCC, Summer Internship
- **2 Reflections**: Academic Journey (to be completed), Spiritual Journey (to be completed)

## Deploying to GitHub Pages

### Option 1: Direct Upload
1. Create a new repository on GitHub (e.g., `acu-portfolio`)
2. Upload all files from this directory
3. Go to repository Settings → Pages
4. Under "Source", select "Deploy from a branch"
5. Select `main` branch and `/ (root)` folder
6. Click Save
7. Your site will be available at: `https://[your-username].github.io/acu-portfolio/`

### Option 2: Using Git Command Line
```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: ACU Portfolio"

# Add your GitHub repository as remote
git remote add origin https://github.com/[your-username]/acu-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then follow steps 3-7 from Option 1.

## Files Included

- `index.html` - Main portfolio page
- `styles.css` - Custom styling
- `Sample Project/` - Font files and reference materials
- `outline.txt` - Content source (not needed for deployment)

## To Complete

1. **Verify headshot image**: Ensure `headshot.jpg` is in the root directory (next to index.html)
   - Recommended: Square photo, at least 400x400px for best quality
   - Will display as a circle on the page
2. Add images for artifacts (optional, referenced in outline.txt)
3. Review and edit content for clarity
4. Deploy to GitHub Pages when ready

## Notes

- The design is fully responsive (mobile, tablet, desktop)
- Uses the Hellix font family from the Sample Project
- Color scheme matches ACU's professional aesthetic
- Content has been condensed from outline.txt while preserving key reflections
