const TELEGRAM_BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.REACT_APP_TELEGRAM_CHAT_ID;

// Debug environment variables
console.log("Environment variables:", {
  REACT_APP_TELEGRAM_BOT_TOKEN: process.env.REACT_APP_TELEGRAM_BOT_TOKEN
    ? "present"
    : "missing",
  REACT_APP_TELEGRAM_CHAT_ID: process.env.REACT_APP_TELEGRAM_CHAT_ID
    ? "present"
    : "missing",
  NODE_ENV: process.env.NODE_ENV,
  allEnvVars: Object.keys(process.env),
});

export const sendTelegramMessage = async (
  name: string,
  email: string,
  message: string
) => {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("Telegram configuration is missing:", {
      hasToken: !!TELEGRAM_BOT_TOKEN,
      hasChatId: !!TELEGRAM_CHAT_ID,
      token: TELEGRAM_BOT_TOKEN ? "present" : "missing",
      chatId: TELEGRAM_CHAT_ID ? "missing" : "present",
      envVars: {
        REACT_APP_TELEGRAM_BOT_TOKEN: process.env.REACT_APP_TELEGRAM_BOT_TOKEN
          ? "present"
          : "missing",
        REACT_APP_TELEGRAM_CHAT_ID: process.env.REACT_APP_TELEGRAM_CHAT_ID
          ? "present"
          : "missing",
      },
    });
    return false;
  }

  const text = `
New Contact Form Submission:
Name: ${name}
Email: ${email}
Message: ${message}
  `.trim();

  try {
    console.log("Attempting to send Telegram message...");
    console.log("Using bot token:", TELEGRAM_BOT_TOKEN.substring(0, 5) + "...");
    console.log("Using chat ID:", TELEGRAM_CHAT_ID);

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: "HTML",
        }),
      }
    );

    const responseData = await response.json();
    console.log("Telegram API Response:", responseData);

    if (!response.ok) {
      console.error("Telegram API error:", {
        status: response.status,
        statusText: response.statusText,
        data: responseData,
      });
      throw new Error(
        `Telegram API error: ${responseData.description || response.statusText}`
      );
    }

    console.log("Telegram message sent successfully");
    return true;
  } catch (error) {
    console.error("Error sending Telegram message:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }
    return false;
  }
};
