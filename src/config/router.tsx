import CompletionPage from "@/pages/CompletionPage";
import CulturalQuestionaire from "@/pages/CulturalQuestionaire";
import GeneratedParagraphPage from "@/pages/GeneratedParagraphPage";
import HomePage from "@/pages/homepage";
import TeacherQuestionare from "@/pages/TeacherQuestionare";
import ParagraphComprehension from "@/pages/ParagraphComprehension";
import { RouteObject } from "react-router-dom";

export const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },

  { path: "/response", element: <GeneratedParagraphPage /> },
  { path: "/cultural-questionaire", element: <CulturalQuestionaire /> },
  { path: "/teacher-survey", element: <TeacherQuestionare /> },
  { path: "/comprehension", element: <ParagraphComprehension /> },
  { path: "/complete", element: <CompletionPage /> },
];
