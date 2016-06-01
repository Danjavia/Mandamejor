if (!me) cancel("You must be logged in to post", 401);
if (me) {
    this.creatorId = me.id
    this.createdDate = new Date().getTime();
}

