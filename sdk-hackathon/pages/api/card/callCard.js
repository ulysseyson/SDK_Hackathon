export default function handler(request, response) {
    const { method } = request;
    // GET, POST, PUT, PATCH 등 요청에 맞는 작업 실행
    if (method === "GET") {
      return response.status(200).json({
        photos,
      });
    }
  }