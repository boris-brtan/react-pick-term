import type { JSX } from "react"

/**
 * Removes accents from text.
 *
 * @param text characters to remove accents.
 */
function removeAccents(text: string) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

/**
 * Properties of {@link PickTerm}.
 */
export interface PickTermProps {
  /** Highlight wrapper class name.*/
  className?: string
  /** Name of HTML tag to wrap term. */
  Tag?: keyof JSX.IntrinsicElements
  /** Term to search for. */
  term: string
  /** Input text to search in. */
  text: string
}

/**
 * Searches for term in text and wraps it with highlighting tag.
 *
 * @param className css name of highlight tag. Defaults to 'accent'
 * @param Tag name of tag wrapper for found terms. Defaults to 'span'
 * @param term token to search for
 * @param text input text to search in
 */
export function PickTerm({ className = 'accent', Tag = 'span', term, text }: PickTermProps) {
  if (!term) {
    return <>{text}</>
  }
  const normText = removeAccents(text)
  const normTerm = removeAccents(term).trim()
  if (normText === normTerm) {
    return <Tag className={className}>{text}</Tag>
  }
  const tokens = normText
    .split(RegExp('(' + normTerm.replace(/[-}{)(\][*+|/.\\]/g, '\\$&') + ')'))
    .filter(Boolean)
    .map((token) => [token.length, token === normTerm])
  if (tokens.length === 1) {
    return <>{text}</>
  }

  return <>{text.split(RegExp(tokens.reduce((pattern, [count]) => `${pattern}(.{${count}})`, '')))
    .filter(Boolean)
    .map((token, idx) => tokens[idx]?.[1] ? <Tag key={idx} className={className}>{token}</Tag> : token)
  }</>
}

export default PickTerm;
