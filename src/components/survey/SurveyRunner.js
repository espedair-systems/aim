import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "bootstrap/dist/css/bootstrap.css";
import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import "jquery-bar-rating/dist/themes/css-stars.css";
import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import * as widgets from "surveyjs-widgets";

widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

class SurveyRunner extends Component {
  json = {
    title: "General Social Survey",
    pages: [
     {
      name: "page1",
      elements: [
       {
        type: "text",
        name: "DOB_Q01",
        title: "What is your Date of Birth",
        inputType: "date"
       },
       {
        type: "radiogroup",
        name: "VIS_Q01",
        indent: 1,
        title: "Are you an Australian citizen ?",
        choices: [
         {
          value: "1",
          text: "Yes"
         },
         {
          value: "5",
          text: "No"
         }
        ],
        colCount: 2
       },
       {
        type: "radiogroup",
        name: "VIS_Q02",
        visibleIf: "{VIS_Q01} = 5",
        title: "Are you a New Zealand citizen ?",
        choices: [
         {
          value: "1",
          text: "Yes"
         },
         {
          value: "5",
          text: "No"
         }
        ],
        colCount: 2
       },
       {
        type: "text",
        name: "VIS_SG03",
        visibleIf: "{VIS_Q01} = 5",
        title: "When did you arrive in Australia ?",
        inputType: "date"
       },
       {
        type: "radiogroup",
        name: "Do you intend to stay in Australia for twelve months or more?",
        visibleIf: "{VIS_Q01} = 5",
        choices: [
         {
          value: "1",
          text: "Yes"
         },
         {
          value: "5",
          text: "No"
         },
         {
          value: "6",
          text: "Don't know"
         }
        ],
        colCount: 3
       },
       {
        type: "radiogroup",
        name: "VIS_Q23",
        visibleIf: "{VIS_Q01} = 5",
        title: "Were you the main applicant for that visa application?",
        choices: [
         {
          value: "1",
          text: "Yes"
         },
         {
          value: "5",
          text: "No"
         },
         {
          value: "6",
          text: "Don't Know"
         }
        ],
        colCount: 3
       },
       {
        type: "radiogroup",
        name: "VIS_Q24",
        visibleIf: "{VIS_Q01} = 5",
        title: "Do you know the name and 3 digit subclass number of that visa?",
        choices: [
         {
          value: "1",
          text: "Visa name and subclass provided"
         },
         {
          value: "2",
          text: "Visa subclass (only) provided"
         },
         {
          value: "3",
          text: "Visa name (only) provided"
         },
         {
          value: "4",
          text: "Visa details unkown"
         }
        ]
       }
      ]
     }
    ],
    showPageNumbers: true,
    showQuestionNumbers: "off",
    showProgressBar: "bottom"
   } ;

  componentWillMount() {
    import("icheck");
    window["$"] = window["jQuery"] = $;
  }

  onValueChanged(result) {
    console.log("value changed!");
  }

  onComplete(result) {
    console.log("Complete! " + result);
  }

  render() {
    Survey.Survey.cssType = "bootstrap";
    var model = new Survey.Model(this.json);
    return (
      <div className="surveyjs">
          <Survey.Survey
            model={model}
            onComplete={this.onComplete}
            onValueChanged={this.onValueChanged}
          />
      </div>
    );
  }
}

export default SurveyRunner;