const { default: axios } = require("axios");

const API_URL = 'https://api.notion.com/v1/pages';
const DB_ID = '';
const AUTH_TOKEN = '';

module.exports = async (req, res) => {

    const {
        nameSuggestion
    }  = req.body;

    try {
        const notionResponse = await axios.post(API_URL, {
            "parent": { "database_id": `${DB_ID}` },
            "properties": {
              "Dog Name Suggestions": [
                {
                  "text": {
                    "content": `${nameSuggestion}`
                  }
                }
              ]
            },
            "children": []
          }, {
            headers: {
              'Authorization': `Bearer ${AUTH_TOKEN}`,
              'Content-Type': 'application/json',
            }
          });

        res.status(200)
        res.json({ 'message':'success' });
        return;

    } catch (e) {
      res.status(500)
      res.json({ error: e })
      return;
    }
}