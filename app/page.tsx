"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Instagram, Mail, Globe, Sigma, LayoutList, Check } from "lucide-react"
import { XLogo } from "@/components/x-logo"

// 아이콘 래퍼 컴포넌트 추가
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-10 w-10 items-center justify-center">{children}</div>
)

export default function LinkTree() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-page-bg p-4">
      <div className="rotating-border">
        <Card className="gradient-card w-full max-w-md overflow-hidden rounded-xl bg-card-bg shadow-lg">
          <div className="flex flex-col items-center p-6">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-card-border shadow-md">
              <Image src="/profile.jpeg" alt="Profile" width={96} height={96} className="object-cover" priority />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-text-primary">xitora</h1>
            <p className="text-center text-text-secondary">리듬게임 플레이어</p>
            <p className="mt-2 text-center text-sm text-text-secondary">상구에서 츄니마이 합니다</p>
          </div>

          <div className="grid grid-cols-2 gap-3 p-6 pt-0">
            <LinkButton
              href="https://github.com/xitora"
              icon={<Github size={30} />}
              label="깃허브"
              description="깃허브 프로필"
            />

            <LinkButton
              href="https://x.com/xit0ra"
              icon={<XLogo size={30} />}
              label="X"
              description="리듬게임 관련 성과 및 잡담"
            />

            <LinkButton
              href="https://instagram.com/xit0ra"
              icon={<Instagram size={30} />}
              label="인스타그램"
              description="거의 사용하지 않음"
            />

            <LinkButton
              href="http://blog.xitora.cc"
              icon={<LayoutList size={30} />}
              label="블로그"
              description="티스토리 블로그"
            />

            <LinkButton
              href="https://xitora.cc"
              icon={<Globe size={30} />}
              label="개인 페이지"
              description="(개발 중)"
            />

            <LinkButton
              href="https://chuni.xitora.cc"
              icon={<Sigma size={30} />}
              label="츄니토라"
              description="(개발 중) 츄니즘 데이터 시각화 프로젝트"
            />

            <LinkButton
              href="mailto:contact@xitora.cc"
              icon={<Mail size={30} />}
              label="이메일"
              description="비즈니스 관련 문의"
              className="col-span-2"
            />

            <CopyButton code="100212077509425" label="츄니즘 친구 코드" tooltip="클릭하여 복사하기" compact />

            <CopyButton code="100916047009415" label="마이마이 친구 코드" tooltip="클릭하여 복사하기" compact />
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
  className?: string
}

function LinkButton({ href, icon, label, description, className = "" }: LinkButtonProps) {
  const [isOverflowing, setIsOverflowing] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textRef.current && description) {
      const isTextOverflowing = textRef.current.scrollWidth > textRef.current.clientWidth
      setIsOverflowing(isTextOverflowing)
    }
  }, [description])

  return (
    <Button
      asChild
      variant="outline"
      className={`link-button flex h-auto w-full flex-col items-center justify-center border border-button-border bg-button-bg py-3 px-4 text-center text-text-primary hover:bg-button-hover hover:text-text-primary ${className}`}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex w-full flex-col items-center">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center icon-container">
          <div className="transform scale-150 origin-center">{icon}</div>
        </div>
        <div className="font-bold text-lg -mt-1 truncate max-w-full label-text-wrapper">
          <span className="label-text">{label}</span>
        </div>
        {description && (
          <div
            ref={textRef}
            className="mt-0.5 mb-1 text-xs text-text-secondary hover:text-text-secondary w-full overflow-hidden whitespace-nowrap description-text"
          >
            {isOverflowing ? (
              <div className="marquee-container">
                <div className="marquee-text">{description}</div>
              </div>
            ) : (
              description
            )}
          </div>
        )}
      </a>
    </Button>
  )
}

interface CopyButtonProps {
  code: string
  icon?: React.ReactNode
  label: string
  description?: string
  tooltip?: string
  className?: string
  compact?: boolean
}

function CopyButton({ code, icon, label, description, tooltip, className = "", compact = false }: CopyButtonProps) {
  const [isOverflowing, setIsOverflowing] = useState(false)
  const [copied, setCopied] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textRef.current && description) {
      const isTextOverflowing = textRef.current.scrollWidth > textRef.current.clientWidth
      setIsOverflowing(isTextOverflowing)
    }
  }, [description])

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="relative group">
      {tooltip && (
        <div
          className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 ${copied ? "tooltip-success" : ""}`}
        >
          {copied ? "복사 완료!" : tooltip}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
      <Button
        variant="outline"
        onClick={handleCopy}
        className={`link-button flex h-auto w-full flex-col items-center justify-center border border-button-border bg-button-bg ${compact ? "py-2" : "py-3"} px-4 text-center text-text-primary hover:bg-button-hover hover:text-text-primary transition-all duration-300 ${copied ? "copy-success" : ""} ${className}`}
      >
        <div className="flex w-full flex-col items-center">
          {icon && (
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center icon-container">
              <div className="transform scale-150 origin-center">
                {copied ? <Check size={30} className="text-green-500" /> : icon}
              </div>
            </div>
          )}
          <div className={`font-bold text-lg ${icon ? "-mt-1" : "mt-0"} truncate max-w-full label-text-wrapper`}>
            <span className="label-text">{label}</span>
          </div>
          {description && (
            <div
              ref={textRef}
              className="mt-0.5 mb-1 text-xs text-text-secondary hover:text-text-secondary w-full overflow-hidden whitespace-nowrap description-text"
            >
              {isOverflowing ? (
                <div className="marquee-container">
                  <div className="marquee-text">{description}</div>
                </div>
              ) : (
                description
              )}
            </div>
          )}
        </div>
      </Button>
    </div>
  )
}

