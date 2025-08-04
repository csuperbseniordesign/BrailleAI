import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CulturalForm from "@/feature/culturalForm/culturalForm";
import { looseCulturalFormSchema } from "@/feature/culturalForm/looseCulturalFormSchema";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import IrbFooter from "@/components/IrbFooter";

type FormValues = z.infer<typeof looseCulturalFormSchema>;

// make it require passage as the context

const CulturalQuestionaire = () => {
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    navigate("/teacher-survey");
    console.log(data);
    const question1 = data.question1;
    const question2 = data.question2;
    const question3 = data.question3;
    const characterQuestion1 = data.characterQuestion1;
    const characterQuestion2 = data.characterQuestion2;
    const characterQuestion3 = data.characterQuestion3;
    const characterQuestion4 = data.characterQuestion4;
    const experienceQuestion1 = data.experienceQuestion1;
    const endingQuestion1 = data.endingQuestion1;
    const endingQuestion2 = data.endingQuestion2;
    const endingQuestion3 = data.endingQuestion3;
    const endingQuestion4 = data.endingQuestion4;
    const blank = data.blank;

    sessionStorage.setItem("question1", question1 ?? "");
    sessionStorage.setItem("question2", question2 ?? "");
    sessionStorage.setItem("question3", question3 ?? "");
    sessionStorage.setItem("characterQuestion1", characterQuestion1 ?? "");
    sessionStorage.setItem("characterQuestion2", characterQuestion2 ?? "");
    sessionStorage.setItem("characterQuestion3", characterQuestion3 ?? "");
    sessionStorage.setItem("characterQuestion4", characterQuestion4 ?? "");
    sessionStorage.setItem("experienceQuestion1", experienceQuestion1 ?? "");
    sessionStorage.setItem("endingQuestion1", endingQuestion1 ?? "");
    sessionStorage.setItem("endingQuestion2", endingQuestion2 ?? "");
    sessionStorage.setItem("endingQuestion3", endingQuestion3 ?? "");
    sessionStorage.setItem("endingQuestion4", endingQuestion4 ?? "");
    sessionStorage.setItem("blank", blank ?? "");

    // make api call to post the student data here
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Main content area */}
      <main className="flex-grow flex justify-center items-start overflow-y-auto py-4 px-4">
        <div className="w-full max-w-screen-md">
          <Card>
            <CardHeader>
              <CardTitle className="font-bold text-3xl text-center">
                Exit Questionnaire - Student
              </CardTitle>

              <CardDescription className="space-y-2 text-card-foreground">
                <h1 className="text-xl font-bold py-[5px]">
                  Instructions for Teachers/Support Staff:
                </h1>

                <p className="text-lg">
                  This questionnaire is part of a reading assessment to help us
                  understand students' backgrounds, reading experiences and
                  interests. The answers will help us choose the right reading
                  materials for each student.
                </p>

                <p className="text-lg">
                  The first part is designed for students to complete with your
                  guidance, while the second part contains questions intended
                  for you to reflect on and respond to.
                </p>

                <ul className="list-disc list-outside pl-6 text-lg space-y-2">
                  <li>
                    Please ensure the student understands the response options:
                    <ul className="list-[circle] pl-6 space-y-2">
                      <li>
                        <strong>Examples:</strong> For each statement below, I
                        want to know how much you agree with it. The four
                        options are: Strongly Agree, Agree, Disagree, Strongly
                        Disagree. If you read the statement “I like lasagna” and
                        lasagna is your favorite meal, then you would probably
                        respond “Strongly Agree.” If you enjoy lasagna but
                        prefer other food, maybe “Agree.” If you don’t like
                        lasagna but would eat it, maybe “Disagree.” If the idea
                        seems gross, then “Strongly Disagree.”
                      </li>
                    </ul>
                  </li>
                  <li>
                    Please read each statement clearly and slowly to the
                    student.
                  </li>
                  <li>
                    If the student needs clarification, explain the statement
                    using simple, age-appropriate language without influencing
                    their response.
                  </li>
                  <li>
                    Allow the student to respond verbally, and you may select
                    their answer on their behalf.
                  </li>
                  <li>
                    Remind the student that there are no right or wrong
                    answers—just their honest opinions.
                  </li>
                  <li>
                    Encourage breaks if needed to ensure the student remains
                    comfortable and focused.
                  </li>
                  <li>
                    If a student does not wish to answer a question, you may
                    quit the web-app and either try another day or end
                    participation.
                  </li>
                  <li>
                    By continuing with the questions you are providing assent to
                    participate.
                  </li>
                </ul>

                <p className="text-lg">
                  Thank you for supporting the student in providing feedback on
                  the reading materials!
                </p>

                <h1 className="text-xl font-bold py-[5px]">
                  Instructions for Student:
                </h1>

                <p className="text-lg">
                  Hi! We want to know what you think about the passage you just
                  read. This is not a test, so there are no right or wrong
                  answers. You can ask your teacher to read the questions out
                  loud or help you answer them.
                </p>

                <p className="text-lg">Let's get started when you're ready!</p>
              </CardDescription>
            </CardHeader>

            <CardContent>
              <CulturalForm onSubmit={onSubmit} />
            </CardContent>
          </Card>
        </div>
      </main>

      <IrbFooter />
    </div>
  );
};

export default CulturalQuestionaire;
