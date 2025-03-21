import React from 'react'

interface TextProps {
    heading: string;
    paragraph: string;
}

const Text = ({heading, paragraph}: TextProps) => {
  return (
    <div className="sm:space-y-[20px] space-y-[10px]">
            <div>
              <p className="lg:text-[38px] sm:text-[32px] sm:leading-[120%] font-semibold text-[28px] leading-[140%]">{heading}</p>
            </div>
            <div>
              <p className="lg:text-[18px] text-[16px] leading-[140%]">{paragraph}</p>
            </div>
    </div>
  )
}

export default Text
