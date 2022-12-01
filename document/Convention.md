# KConnect Project

## 📚 General workflow convention

### 🔖 Git branch workflow

1. Create a new branch and work on it for each Jira task or bug ticket.
2. Create merge request after pushing it to remote repository, then close source branch after it's merged into target branch (develop, uat, etc.)
3. Pull/merge request must be approved by at least one team member before merging.
4. Commit message should be short and concise, have a prefix including the Jira ticket code.

![git-brach-flow](./images/git-branch-flow.png)

We have 3 prefixes: `(feature,fix,hotfix)`/[Jira issue]

_Example:_

Branch name:

    git checkout -b feature/kpvt-88

### 🔖 Commit message

    feature/kpvt-88: add something to somewhere
    fix/kpvt-89: fix something at somewhere
    hotfix/kpvt-89: hot-fix something at somewhere
