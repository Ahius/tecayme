export default function FAQ() {
  const faqs = [
    {
      question: "Làm cách nào để đặt hàng?",
      answer: "Bạn có thể đặt hàng trực tiếp trên website bằng cách chọn sản phẩm, thêm vào giỏ hàng và tiến hành thanh toán. Hoặc bạn có thể gọi điện đến số hotline của chúng tôi để được hỗ trợ đặt hàng."
    },
    {
      question: "Thời gian giao hàng là bao lâu?",
      answer: "Thời gian giao hàng phụ thuộc vào địa chỉ nhận hàng của bạn. Đối với nội thành TP.HCM, thời gian giao hàng từ 1-2 ngày làm việc. Đối với các tỉnh thành khác, thời gian giao hàng từ 3-7 ngày làm việc."
    },
    {
      question: "Tôi có thể đổi trả sản phẩm không?",
      answer: "Chúng tôi chấp nhận đổi trả sản phẩm trong vòng 7 ngày kể từ ngày nhận hàng nếu sản phẩm gặp vấn đề về chất lượng hoặc lỗi kỹ thuật. Sản phẩm phải còn nguyên vẹn, đầy đủ hộp và phụ kiện đi kèm."
    },
    {
      question: "Phương thức thanh toán nào được chấp nhận?",
      answer: "Chúng tôi chấp nhận các phương thức thanh toán sau: Thanh toán khi nhận hàng (COD), Chuyển khoản ngân hàng, Thanh toán qua thẻ tín dụng/ghi nợ, và các ví điện tử phổ biến."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-10 max-w-4xl bg-red-50 rounded-xl shadow-lg border-2 border-red-500 mt-10 mb-5">
      <h1 className="text-3xl font-bold text-red-600 mb-6 border-b-4 border-red-500 pb-3">🔥 Câu hỏi thường gặp</h1>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 bg-red-100 rounded-lg shadow-md hover:bg-red-200 transition">
            <h2 className="text-xl font-semibold text-red-700 mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-red-200 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-red-700 mb-3">❓ Bạn vẫn còn thắc mắc?</h2>
        <p className="text-gray-800">Liên hệ ngay với chúng tôi để được hỗ trợ.</p>
        <a href="/contact" className="inline-block bg-red-600 text-white px-6 py-2 mt-3 rounded-lg hover:bg-red-700 transition">
          Liên hệ ngay
        </a>
      </div>
    </div>
  );
}
