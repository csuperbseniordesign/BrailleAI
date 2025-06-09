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

type FormValues = z.infer<typeof looseCulturalFormSchema>;

// make it require passage as the context

const CulturalQuestionaire = () => {
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    navigate("/teacher-survey");
    console.log(data);

    // make api call to post the student data here
  };

  return (
    <div className="flex justify-center items-center overflow-y-auto max-h-90 py-[10px] w-full">
      <div className="max-w-screen-md">
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
                guidance, while the second part contains questions intended for
                you to reflect on and respond to.
              </p>

              <ul className="list-disc list-outside pl-6 text-lg">
                <li>
                  Please Ensure the student understands the response options;
                  <ul className="list-[circle] pl-6">
                    <li>
                      Examples: <br />
                      For each statement below, I want to know how much you
                      agree with each statement. The four options are: Strongly
                      Agree, Agree, Disagree, Strongly Disagree. For example, if
                      I read the statement “I like lasagna” and lasagna is your
                      favorite meal, then you would probably respond “Strongly
                      Agree.” If you enjoy lasagna, but prefer to eat other
                      things, then you could respond “Agree.” If you don't like
                      lasagna, but you would eat it if it was served at dinner
                      you might respond “Disagree.” If the idea of lasagna seems
                      gross to you, then you would probably respond “Strongly
                      Disagree.”
                    </li>
                  </ul>
                </li>

                <li>
                  Please read each statement clearly and slowly to the student
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
                  answers—just their honest opinions.{" "}
                </li>
                <li>
                  Encourage breaks if needed to ensure the student remains
                  comfortable and focused.
                </li>
                <li>
                  {" "}
                  If a student does not wish to answer a question, you may quit
                  the web-app and either try another day or end participation in
                  the study.
                </li>
                <li>
                  {" "}
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
                answers. You can ask your teacher to read the questions out loud
                or help you answer them.
              </p>

              <p className="text-lg">Let's get started when you're ready!</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CulturalForm onSubmit={onSubmit} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CulturalQuestionaire;
