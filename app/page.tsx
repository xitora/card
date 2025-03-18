import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Instagram, Mail, Globe, ExternalLink } from "lucide-react"
import { XLogo } from "@/components/x-logo"

export default function LinkTree() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-page-bg p-4">
      <div className="rotating-border">
        <Card className="w-full max-w-md overflow-hidden rounded-xl bg-card-bg shadow-lg">
          <div className="flex flex-col items-center p-6">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-card-border shadow-md">
              <Image src="/profile.jpeg" alt="Profile" width={96} height={96} className="object-cover" priority />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-text-primary">xitora</h1>
            <p className="text-center text-text-secondary">리듬우락스레기</p>
            <p className="mt-2 text-center text-sm text-text-secondary">츄니마이 합니다!</p>
          </div>

          <div className="flex flex-col gap-3 p-6 pt-0">
            <LinkButton
              href="https://github.com/xitora"
              icon={<Github size={18} />}
              label="깃허브"
              description="대부분의 repo가 비공개로 전환됨"
            />

            <LinkButton
              href="https://x.com/xit0ra"
              icon={<XLogo size={18} />}
              label="X"
              description="간단한 글로 일상을 공유"
            />

            <LinkButton
              href="https://instagram.com/xit0ra"
              icon={<Instagram size={18} />}
              label="인스타그램"
              description="사진과 영상으로 일상을 공유"
            />

            <LinkButton
              href="http://blog.xitora.cc"
              icon={<LayoutList size={18} />}
              label="블로그"
              description="잘 안씁니다."
            />

            <LinkButton
              href="https://xitora.cc"
              icon={<Globe size={18} />}
              label="개인 페이지"
              description="개발 중"
            />

            <LinkButton
              href="https://chuni.xitora.cc"
              icon={<Sigma size={18} />}
              label="츄니토라"
              description="(개발 중) 츄니즘 데이터 시각화 페이지"
            />

            <LinkButton
              href="mailto:contact@xitora.cc"
              icon={<Mail size={18} />}
              label="이메일"
              description="현재 등록된 이메일은 사용하지 않고 있습니다."
            />
          </div>

          <div className="border-t border-card-border p-4 text-center text-xs text-text-secondary">
            © {new Date().getFullYear()} xitora. All rights reserved.
          </div>
        </Card>
      </div>
    </div>
  )
}

interface LinkButtonProps {
  href: string
  icon: React.ReactNode
  label: string
  description?: string
}

function LinkButton({ href, icon, label, description }: LinkButtonProps) {
  return (
    <Button
      asChild
      variant="outline"
      className="flex h-auto w-full items-center justify-start gap-3 border border-button-border bg-button-bg p-4 text-left text-text-primary hover:bg-button-hover hover:text-text-primary"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="flex min-w-8 items-center justify-center">{icon}</div>
        <div>
          <div className="font-medium">{label}</div>
          {description && <div className="text-xs text-text-secondary hover:text-text-secondary">{description}</div>}
        </div>
        <ExternalLink size={14} className="ml-auto text-text-secondary" />
      </a>
    </Button>
  )
}

