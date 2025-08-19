import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import IrbFooter from "@/components/IrbFooter";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-5xl">
          <Card className="border-2 border bg-card text-card-foreground">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-4xl font-bold">
                Project CREATE! Investigating social validity of AI generated
                passages
              </CardTitle>
            </CardHeader>

            <CardContent className="px-8 py-4 space-y-6 text-lg leading-relaxed">
              <p>
                You are invited to take part in a research project conducted by
                a team of researchers:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Cheryl Kamei-Hannan, Ph.D., California State University, Los
                  Angeles
                </li>
                <li>
                  Dr. Navid Amini, Ph.D., California State University, Los
                  Angeles
                </li>
                <li>
                  Minjeong Jeon, Ph.D., University of California, Los Angeles
                </li>
                <li>Michael Tuttle, Ph.D., Florida State University</li>
                <li>Jinwen Luo, Research Team Member</li>
                <li>Seewoo Li, Research Team Member</li>
                <li>Yingshi Huang, Research Team Member</li>
                <li>Luis Badillo, Research Team Member</li>
                <li>Sahis Neupane, Research Team Member</li>
              </ul>

              <p>
                This project aims to develop a web-based application using AI to
                generate personalized reading passages based on children's
                interests. We are inviting teachers and family members of
                students who are visually impaired and/or learning braille to
                participate.
              </p>

              <p>
                Participants will answer demographic and interest questions. The
                AI will generate a passage tailored to those interests. You'll
                read the passage, answer two comprehension questions, and
                complete an exit survey. You may read up to 5 passages in a
                session, and sessions can be repeated. Each session takes about
                30 minutes.
              </p>

              <p>
                Participation is voluntary and poses minimal risk. You can skip
                questions, take breaks, or withdraw at any time. Medical care
                for participants is available as described under university
                policy, but costs for outside care are the participant’s
                responsibility. In emergencies, 911 will be called.
              </p>

              <p>
                Your identity will remain confidential and be protected by
                encryption and secure storage. Reports will only present
                aggregate data. Identifying information will not be shared
                without your permission or as required by law.
              </p>

              <p>
                If you have questions, please contact Dr. Cheryl Kamei-Hannan at{" "}
                <a className="underline" href="mailto:ckameih@calstatela.edu">
                  ckameih@calstatela.edu
                </a>{" "}
                or 323-343-4400. You may also contact any of the following:
              </p>

              <ul className="list-disc list-inside space-y-1">
                <li>
                  Dr. Navid Amini –{" "}
                  <a href="mailto:namini@calstatela.edu" className="underline">
                    namini@calstatela.edu
                  </a>
                </li>
                <li>
                  Minjeong Jeon –{" "}
                  <a href="mailto:mjjeon@ucla.edu" className="underline">
                    mjjeon@ucla.edu
                  </a>
                </li>
                <li>
                  Michael Tuttle –{" "}
                  <a href="mailto:mjt18t@fsu.edu" className="underline">
                    mjt18t@fsu.edu
                  </a>
                </li>
                <li>
                  Jinwen Luo –{" "}
                  <a href="mailto:jevanluo@g.ucla.edu" className="underline">
                    jevanluo@g.ucla.edu
                  </a>
                </li>
                <li>
                  Seewoo Li –{" "}
                  <a href="mailto:seewooli@g.ucla.edu" className="underline">
                    seewooli@g.ucla.edu
                  </a>
                </li>
                <li>
                  Yingshi Huang –{" "}
                  <a href="mailto:yingshi@g.ucla.edu" className="underline">
                    yingshi@g.ucla.edu
                  </a>
                </li>
                <li>
                  Luis Badillo –{" "}
                  <a
                    href="mailto:lbadill3@calstatela.edu"
                    className="underline"
                  >
                    lbadill3@calstatela.edu
                  </a>
                </li>
                <li>
                  Sahis Neupane –{" "}
                  <a
                    href="mailto:sneupan4@calstatela.edu"
                    className="underline"
                  >
                    sneupan4@calstatela.edu
                  </a>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="px-8 pb-8">
              <div className="flex justify-end w-full">
                <Button
                  onClick={() => navigate("/demographicsurvey")}
                  size="lg"
                  className="disabled:bg-gray-400 text-white text-xl font-bold py-4 px-8 h-auto"
                >
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      <IrbFooter />
    </div>
  );
};

export default LandingPage;
