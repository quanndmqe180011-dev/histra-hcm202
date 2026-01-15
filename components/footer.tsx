import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative bg-[#1f1b12] py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Manifesto */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Symbol Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/logo.png"
              alt="Biểu tượng lịch sử Việt Nam"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>

          {/* Manifesto Text */}
          <div className="max-w-xl">
            <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Tuyên ngôn lịch sử
            </h3>

            <h2 className="text-2xl md:text-3xl font-medium text-white leading-snug mb-6">
              Tái hiện cơ sở lý luận
              <br />
              và thực tiễn lịch sử
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Vì sao con đường xã hội chủ nghĩa là lựa chọn đúng đắn
              của cách mạng Việt Nam — một quyết định được kiểm chứng
              bằng lịch sử, thực tiễn và vai trò của nhân dân.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 pt-8 border-t border-border flex justify-between text-sm text-muted-foreground">
          <p>© 2025 Histra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
