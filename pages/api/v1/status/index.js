function status(request, response) {
  response.status(200).json({ key: "Try be better every day" });
}

export default status;
