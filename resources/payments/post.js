if (!me) cancel("You must be logged in to post", 401);
dpd.groups.get({id: this.group}, function(groups) {
    if (!groups) {
        cancel("You are not the creator", 401);
    }
    if (!me || me.id !== groups.creator) {
      cancel("You are not the creator", 401);
    }
});
