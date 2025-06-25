def commit_callback(commit):
    if commit.author_name == "Mashhood Ahmad Danish":
        commit.skip()
