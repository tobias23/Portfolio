import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://getdrawings.com/free-icon/male-avatar-icon-72.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Tobias Skov Ludvigsen</h2>
            <h4 style={{ color: "grey" }}> Programmør</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "75%" }} />
            <h5>Adress</h5>
            <p>Dybbølsvej 29, 8240 Risskov</p>
            <h5>Phone</h5>
            <p>23652668</p>
            <h5>Email</h5>
            <p>toby.skov.ludvigsen@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "75%" }} />
            <h4 style={{ color: "grey" }}>Om Mig</h4>
            <p>
              Jeg udadvendt og jordnær med en god forståelse for forskellige
              mennesker og diverse personligheder. På arbejdspladsen er jeg
              engageret i i mine opgaver, initiativrig og løsningsorienteret.
              Jeg arbejder godt selvstændigt og trives som en del af et team.
              Jeg går meget op i musik, gaming og badminton
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "75%" }} />
            <p>
              Dansk : Flydende <br /> Engelsk : Flydende <br /> Kørekort: Ja
            </p>
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Uddanneslse</h2>

            <Education
              endYear={2019}
              schoolName="Aarhus Erhvervsakademi"
              schoolDescription="Professionsbachelor som Webdeveloper"
            />

            <Education
              endYear={2017}
              schoolName="Aarhus Erhvervsakademi"
              schoolDescription="Uddannet som Datamatiker"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Erfaring</h2>
            <Experience
              startYear="Juni 2019"
              endYear="August 2019"
              jobName="UNITY UDVIKLER"
              jobDescription="Jeg har været en del af et lille team hvori min opgave var at
              lave en Virtual reality løsning i Unity, hvor der er blevet kodet i C#
              og lavet databaser med PhpMyadmin. Jeg har derudover opdateret virksomhedens
              hjemmeside i Wordpress. Fastansættelse var ikke muligt, da virksomheden 
              er en startup og ikke havde kapital til en længerevarende ansættelse"
            />

            <Experience
              startYear="Februar 2017"
              endYear="Maj 2017"
              jobName="UDVIKLER"
              jobDescription="Lavet et dashboard i Javascript med brug af charts.js som skulle
              vise virksomheden, hvor der var aktivitet i deres system, ved brug af en større
              SQL database."
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Frivilligt arbejde - Erfaring eller ledelse</h2>
            <Experience
              startYear="2018"
              endYear="2020"
              jobName="Besyrrelses Medlem"
              jobDescription="Medlem i bestyrrelsen på Grenaavej kollegiet med ansvar for fælles arealer,
              udlejning af gæsteværelse, arrangerere events/beboermøder/fester
              og være med til budgetmøde med kollegiekontoret og"
            />

            <Experience
              startYear="2014"
              endYear="2015"
              jobName="Pædagog"
              jobDescription="Arbejde på Specialcenter Ribe; afdeling Rabu med pleje og omsorg
               af svært handikappede børn."
            />

            <Experience
              startYear="2014"
              endYear="2015"
              jobName="Pædagog"
              jobDescription="Arbejde som vikar i SFO på Vittenbergskolen i Ribe."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Færdigheder</h2>
            <Skills skill="HTML" progress={100} />
            <Skills skill="Javascript" progress={100} />
            <Skills skill="TypeScript" progress={90} />
            <Skills skill="CSS" progress={100} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
