import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  handler: (_, res) => {
    res.status(429).json({
      error: "Too many requests, please try again later.",
    });
  },
});

export default rateLimiter;
