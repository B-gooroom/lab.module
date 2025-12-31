import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { NextResponse } from "next/server";

const SPREADSHEET_ID = "1GfjTXMFw8XXDD6JVs6RYBqMXvnFnUMfasyDCTcAF4aU";
const SHEET_ID = 0; // 첫 번째 시트 (0-indexed)

export async function POST(request: Request) {
  try {
    const { name, company, email, tel, projectField } = await request.json();

    // 필수 필드 검증
    if (!name || !company || !email || !tel) {
      return NextResponse.json(
        { error: "필수 필드를 모두 입력해주세요." },
        { status: 400 }
      );
    }

    if (
      !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
      !process.env.GOOGLE_PRIVATE_KEY
    ) {
      return NextResponse.json(
        { error: "서버 환경 변수가 설정되지 않았습니다." },
        { status: 500 }
      );
    }

    // 서비스 계정 인증
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID];
    // 새 행 추가
    await sheet.addRow({
      이름: name,
      회사명: company,
      이메일: email,
      연락처: tel,
      프로젝트: projectField,
      접수일시: new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }),
    });

    return NextResponse.json({ success: true, message: "저장되었습니다!" });
  } catch (error) {
    console.error("Spreadsheet error:", error);
    return NextResponse.json(
      { error: "저장 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
