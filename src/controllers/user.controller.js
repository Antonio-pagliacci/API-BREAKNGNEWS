const create = (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;
  if (!name || !username || !email || !password || !avatar || !background) {
    return res.status(400).json({
      error: "Submit all fields for registration.",
    });
  }

  
  return res.status(201).json({
    message: "User created successfully!",
    user: {
      name,
      username,
      email,
      avatar,
      background,
    },
  });
};

export default { create };
