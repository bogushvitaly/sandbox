import * as YAML from "js-yaml";
import * as _ from "lodash/fp";

import { FaqItem } from "@angular-material-extensions/faq";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

import { DemoKnowledgeBaseBaseComponent } from "@applications/features";

@Component({
  selector: "app-demo-knowledge-base",
  templateUrl: "demo-knowledge-base.component.html",
  styleUrls: ["demo-knowledge-base.component.scss"]
})
export class DemoKnowledgeBaseComponent extends DemoKnowledgeBaseBaseComponent
  implements OnInit {
  faq: FaqItem[] = [];

  constructor(private http: HttpClient) {
    super();
  }
  title = "list of Blocks";
  blocks: object[];
  ngOnInit() {
    this.http
      .get("/assets/knowledge-base/example.yml", { responseType: "text" })
      .subscribe(data => {
        this.blocks = YAML.load(data);
        const getDefinitions = () =>
          _.get("knowledge-base.definitions", this.blocks);
        const getPrinciples = () =>
          _.get("knowledge-base.principles", this.blocks);

        const getDefinitionsItems = item => {
          return {
            question: _.head(_.keys(item)),
            answer: _.head(_.values(item))
          };
        };

        const getPrinciplesItems = item => {
          return {
            question: _.head(_.keys(item)),
            answer: _.head(_.values(item))
          };
        };

        const definitions = _.map(getDefinitionsItems, getDefinitions());
        const principles = _.map(getPrinciplesItems, getPrinciples());
        this.faq.push(...definitions);
        this.faq.push(...principles);
      });
  }

  onNewFaqItem(faqItem: FaqItem) {
    this.faq.splice(0, 0, faqItem);
  }
}
