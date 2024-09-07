import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import troughtImageUrl from '../../assets/trought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: troughtImageUrl,
      alt: 'Imagem de um balao de pensamento'
    }
  }
};

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  function handleRestartFeedback() {
    setFeedbackType(null)
  }
 
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      
    {!feedbackType ? (
       <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
    ) : (
      <>
        <FeedbackContentStep 
          feedbackType={feedbackType} 
          onFeedbackRestartRequested={handleRestartFeedback}  
        />
      </>
    )}
      <footer className="text-xs text-neutral-400">
        Made in <a href="" className="underline underline-offset-1">Status Page</a>
      </footer>
    </div>
  )
}