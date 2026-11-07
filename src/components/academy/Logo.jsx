/**
 * LOGO — the Discoursia.ai mark and wordmark.
 *
 * Two colourways: navy for light backgrounds, white for the navy footer.
 */

import markNavy from '../../assets/mark-navy.png'
import markWhite from '../../assets/mark-white.png'
import wordNavy from '../../assets/wordmark-navy.png'
import wordWhite from '../../assets/wordmark-white.png'

function Logo({ variant = 'navy', size = 'md', showWordmark = true }) {
  const mark = variant === 'white' ? markWhite : markNavy
  const word = variant === 'white' ? wordWhite : wordNavy

  const markSize = size === 'sm' ? 'h-7 w-7' : 'h-9 w-9'
  const wordSize = size === 'sm' ? 'h-4' : 'h-5'

  return (
    <span className="flex items-center gap-2.5">
      <img src={mark} alt="" className={`${markSize} object-contain`} aria-hidden="true" />
      {showWordmark ? (
        <img src={word} alt="Discoursia.ai" className={`${wordSize} object-contain`} />
      ) : (
        <span className="sr-only">Discoursia.ai</span>
      )}
    </span>
  )
}

export default Logo
