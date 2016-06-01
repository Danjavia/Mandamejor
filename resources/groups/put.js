if (!me) cancel("You must be logged in to post", 401);

if (!(me && me.id === this.creator)) {
    cancel("You are not the creator", 401);
}