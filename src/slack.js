const { WebClient } = require("@slack/web-api");

exports.lambdaHandler = async (event, context) => {
  // An access token (from your Slack app or custom integration - xoxp, xoxb)
  const token = process.env.SLACK_TOKEN;

  const web = new WebClient(token);

  // This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
  const conversationId = process.env.CHANNEL_ID;
  const currentTime = new Date().toTimeString();
  // See: https://api.slack.com/methods/chat.postMessage
  const res = await web.chat.postMessage({
    channel: conversationId,
    text: `${currentTime} - To só testando o job rapaziada`,
  });

  // `res` contains information about the posted message
  console.log("Message sent: ", res.ts);
};
