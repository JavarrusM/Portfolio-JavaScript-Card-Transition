// Fetch Photos From UnSplash
const fetchPhotoData = async (topicID = "") => {
  const apiKey = "API KEY"
  const topic = topicID ? `topics/${topicID}/` : "";
  const url = `https://api.unsplash.com/${topic}photos?client_id=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data?.cod === "404") {
    alert("Invalid Topic");
    return;
  }

  return data;
};
