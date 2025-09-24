"use client";
// import PdfViewer from "../cards/PdfViewer";
import CVPreview from "../cards/CVPreview";
function About() {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-4 text-white mb-8">
      <p className="font-bold text-5xl md:text-7xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        About Me
      </p>
      <p className="text-center w-2/5">
        Passionate developer with a love for creating beautiful and functional
        web experiences
      </p>
      <div className="flex flex-row w-4/5 justify-center gap-8 mt-8">
        <div className=" w-2/5 flex flex-col items-center gap-4 rounded-full">
          <div className="relative w-64 h-64 mb-8">
            <div className="absolute inset-0 rounded-full bg-white blur-sm"></div>
            {/* ảnh avatar */}
            <img
              className="relative w-full h-full object-cover rounded-full"
              src="/images/avatar.jpg"
              alt="About Me"
            />
          </div>

          <p className="font-semibold w-full pl-4">
            Xin chào, tôi là Phan Công Châu
          </p>
          <p className="text-justify w-full pl-4">
            Tôi là sinh viên Khoa Công nghệ Thông tin, Trường Đại học Khoa học
            Tự nhiên TP Hồ Chí Minh.
          </p>
          <p className="text-justify w-full pl-4">
            Tôi hiện theo đuổi lĩnh vực Frontend Development, với niềm đam mê
            trong việc xây dựng các giao diện hiện đại, trực quan và tối ưu trải
            nghiệm người dùng.
          </p>
          <p className="text-justify w-full pl-4">
            Tôi luôn tìm tòi, học hỏi những công nghệ web mới nhất, áp dụng thực
            hành tốt để phát triển kỹ năng và tạo ra những sản phẩm web chất
            lượng, vừa thẩm mỹ vừa hiệu quả.
          </p>

          {/* Road map */}
          <div className="w-full border-l-4 border-l-blue-500 pl-4 flex flex-col gap-6">
            <div>
              <p className="text-blue-300 font-semibold">Ngắn hạn</p>
              <p>6-12 tháng: Nâng cao kỹ năng React, Next.js và TypeScript</p>
            </div>
            <div>
              <p className="text-blue-500 font-semibold">Trung hạn</p>
              <p>
                1-2 năm: Phát triển kỹ năng Backend với Node.js, Express và cơ
                sở dữ liệu
              </p>
            </div>
            <div>
              <p className="text-blue-700 font-semibold">Dài hạn</p>
              <p>
                2-5 năm: Trở thành Fullstack Developer, dẫn dắt team và mentor
                cho junior
              </p>
            </div>
          </div>
        </div>
        <div className="w-3/5 min-h-96 h-fit p-4 rounded-[16px] relative">
          <CVPreview />
        </div>
      </div>
    </div>
  );
}

export default About;
