# PHMockWebsiteDemo

Welcome to PHMockWebsiteDemo! This repository contains a mock website demonstration.

## Getting Started

If you're a first-time user, follow these steps to get started:

### Prerequisites

Make sure you have the following installed:

- [Your preferred IDE]
- [Git]

### Installation

1. Open your IDE's terminal and navigate to a suitable folder. Then, run the following command to clone the repository:

```bash
git clone https://github.com/chin-herng/ph-mock-website-demo.git
```

2. After cloning, navigate into the project directory using the following commands:

```bash
cd ph-mock-website-demo
```

## Making Changes

### Before making change

1. Pull changes from the main repository and automatically merge them into your local branch.

```bash
git checkout main
git pull 
```

2. Create a new branch for your changes (modify the branch name to something suit your case, e.g. "navigation-bar-branch"):

```bash
git checkout -b my-feature-branch
```

3. Run the following command to start the development server. This will launch your React application, and you can view it in your web browser at http://localhost:3000.

```bash
npm start
```

If you encounter error regarding module not install, try the code below:

```bash
npm install react-scripts --save
```

### After making change

1. Pull changes from the main repository and automatically merge them into your local branch.

```bash
git checkout main
git pull 
```

2. Merge your changes to the latest main branch:

```bash
git checkout my-feature-branch
git rebase main
```

3. Build the website.

```bash
npm run build
```
  
4. Stage your changes, and commit.

```bash
git add .
git commit -m "Description of changes"
```

5. Push your changes to GitHub.

```bash
git push --set-upstream origin my-feature-branch
```

6. Go to the repository on GitHub and click "Pull requests" at navigation bar.

7. Click the "New Pull Request" button.

8. Choose your branch name and click "Create Pull Request." 

## Folders / Files Explanation

1. src (folder)
   - Codes for the website.

2. index.html (file)
   - Must be placed at root in order for github to detect and render the website.
