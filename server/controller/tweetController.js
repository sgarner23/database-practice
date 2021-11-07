module.exports = {
  addTweet: async (req, res) => {
    //connect to our db
    const db = req.app.get("db");
    //get the data from the req.body (front end)
    const { tweet } = req.body;

    //save the data to the db
    const addTweet = await db.add_tweet([tweet]);

    //send the data back to the client
    res.status(200).send(addTweet);
  },

  getAllTweets: async (req, res) => {
    const db = req.app.get("db");
    const { tweets } = req.body;
    const getAllTweets = await db.get_tweets([tweets]);

    res.status(200).send(getAllTweets);
  },
  deleteTweet: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    await db.delete_tweet([id]);

    res.status(200).send("Deleted successfully!");
  },
  editTweet: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { tweet } = req.body;
    await db.edit_tweet([tweet, id]);

    res.status(200).send("edited successfully");
  },
  getTweetByID: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    const tweet = await db.get_tweet_byID([id]);

    res.status(200).send({ tweet });
  },
};
