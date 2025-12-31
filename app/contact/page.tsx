"use client";

import { useState } from "react";
import LogoLoop from "../components/LogoLoop";

export default function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [projectField, setProjectField] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleConnect = async () => {
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          company,
          email,
          tel,
          projectField,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("문의가 성공적으로 접수되었습니다!");
        // 폼 초기화
        setName("");
        setCompany("");
        setEmail("");
        setTel("");
        setProjectField("");
      } else {
        setMessage(data.error || "오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("네트워크 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div className="px-[80px] md:px-8 lg:px-20 xl:px-[80px] pt-12 ">
        <h1 className="text-[48px] md:text-[64px] lg:text-[80px] xl:text-[128px] font-bold">
          CONTACT_
        </h1>
        <p className="h-[80px]" />
        <div className="flex items-center justify-between py-[16px] border-b border-[#111111] gap-8 md:gap-16 lg:gap-32">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
            <span className="text-[16px] md:text-[20px] lg:text-[30px] font-semibold w-8 ml-[50px]">
              1
            </span>
            <span className="text-[16px] md:text-[20px] lg:text-[30px] font-semibold w-[360px]">
              NAME*
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-md text-gray-600 leading-relaxed w-[360px] h-[40px] p-2 outline-none"
              placeholder="이름을 입력해주세요"
            />
          </div>
        </div>
        <div className="flex items-center justify-between py-[16px] border-b border-[#111111] gap-8 md:gap-16 lg:gap-32">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
            <span className="text-[16px] md:text-[20px] lg:text-[30px] font-semibold w-8 ml-[50px]">
              2
            </span>
            <span className="text-[16px] md:text-[20px] lg:text-[30px] font-semibold w-[360px]">
              COMPANY*
            </span>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="text-md text-gray-600 leading-relaxed w-[360px] h-[40px] p-2 outline-none"
              placeholder="회사명을 입력해주세요"
            />
          </div>
        </div>
        <div className="flex items-center justify-between py-[16px] border-b border-[#111111] gap-8 md:gap-16 lg:gap-32">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
            <span className="text-[16px] md:text-[20px] lg:text-[30px] font-semibold w-8 ml-[50px]">
              3
            </span>
            <span className="text-[16px] md:text-[20px] lg:text-[30px] font-semibold w-[360px]">
              E-MAIL*
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-md text-gray-600 leading-relaxed w-[360px] h-[40px] p-2 outline-none"
              placeholder="이메일을 입력해주세요"
            />
          </div>
        </div>
        <div className="flex items-center justify-between py-[16px] border-b border-[#111111] gap-8 md:gap-16 lg:gap-32">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
            <span className="text-[16px] md:text-[20px] lg:text-[30px] font-semibold w-8 ml-[50px]">
              4
            </span>
            <span className="text-[16px] md:text-[20px] lg:text-[30px] font-semibold w-[360px]">
              TEL*
            </span>
            <input
              type="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className="text-md text-gray-600 leading-relaxed w-[360px] h-[40px] p-2 outline-none"
              placeholder="연락처를 입력해주세요"
            />
          </div>
        </div>
        <div className="flex items-center justify-between py-[16px]">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
            <span className="text-[16px] md:text-[20px] lg:text-[30px] font-semibold w-8 ml-[50px]">
              5
            </span>
            <span className="text-[16px] md:text-[20px] lg:text-[30px] font-semibold w-[360px]">
              PROJECT FIELD
            </span>
            <input
              type="text"
              value={projectField}
              onChange={(e) => setProjectField(e.target.value)}
              className="text-md text-gray-600 leading-relaxed w-[440px] h-[40px] p-2 outline-none"
              placeholder="웹사이트, 앱, 브랜딩, 기타 등 진행하시는 프로젝트를 입력해주세요"
            />
          </div>
        </div>
        <p className="h-[80px]" />
        {message && (
          <p
            className={`text-center mb-4 ${
              message.includes("성공") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
        <button
          className="w-full h-[56px] bg-black text-white text-[16px] font-semibold cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={handleConnect}
          disabled={!name || !company || !email || !tel || isLoading}
        >
          {isLoading ? "SENDING..." : "CONNECTING"}
        </button>
        <p className="h-[150px]" />
      </div>
      <div className="relative w-full overflow-hidden">
        <LogoLoop />
      </div>
      <p className="h-[150px]" />
    </div>
  );
}
