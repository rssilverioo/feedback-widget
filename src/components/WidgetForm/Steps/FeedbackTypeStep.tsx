import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"


interface FeedbackTypeSteProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}
export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeSteProps) {
  return (
    <>

<header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center border-2 gap-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              type="button"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            ><span>
                <img src={value.image.source} alt={value.image.alt} />
                {value.title}</span></button>
          )
        })}
      </div>
    </>
  )
}