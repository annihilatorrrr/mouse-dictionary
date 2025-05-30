/**
 * Mouse Dictionary (https://github.com/wtetsu/mouse-dictionary/)
 * Copyright 2018-present wtetsu
 * Licensed under MIT
 */

import { produce } from "immer";
import { res } from "../../logic";
import type { MouseDictionaryAdvancedSettings, UpdateEventHandler } from "../../types";
import { HighlightEditor } from "../atom/HighlightEditor";
import { ReplaceRuleEditor } from "./ReplaceRuleEditor";

type AdvancedSettingsProps = {
  settings: MouseDictionaryAdvancedSettings;
  onUpdate: UpdateEventHandler;
};

export const AdvancedSettings: React.FC<AdvancedSettingsProps> = (props) => {
  const lookupWithCapitalized = props.settings?.lookupWithCapitalized ?? false;
  const parseWordsLimit = props.settings?.parseWordsLimit ?? 8;
  const pdfUrl = props.settings?.pdfUrl ?? "";
  const domType = props.settings?.domType ?? "shadow";
  const contentWrapperTemplate = props.settings?.contentWrapperTemplate ?? "";
  const dialogTemplate = props.settings?.dialogTemplate ?? "";
  const contentTemplate = props.settings?.contentTemplate ?? "";
  const normalDialogStyles = props.settings?.normalDialogStyles ?? "";
  const movingDialogStyles = props.settings?.movingDialogStyles ?? "";
  const hiddenDialogStyles = props.settings?.hiddenDialogStyles ?? "";

  const update = (patch: Partial<MouseDictionaryAdvancedSettings>) => {
    const newPatch = produce(patch, (d) => {
      for (const name of Object.keys(patch)) {
        const value = patch[name];
        if (Number.isNaN(value) || (Number.isInteger(value) && value < 0)) {
          d[name] = 0;
        }
      }
    });
    props.onUpdate(undefined, newPatch);
  };

  return (
    <form className="settingsForm">
      <fieldset>
        <h2>{res.get("advancedSettings")}</h2>
        <label>{res.get("abbreviateShortWordDesc")}</label>
        <span> {res.get("abbreviateShortWordDesc0")} </span>
        <input
          type="number"
          name="shortWordLength"
          value={props.settings.shortWordLength}
          style={{ width: 60 }}
          onChange={(e) => update({ [e.target.name]: Number.parseInt(e.target.value, 10) })}
        />
        <span> {res.get("abbreviateShortWordDesc1")} </span>
        <input
          type="number"
          name="cutShortWordDescription"
          value={props.settings.cutShortWordDescription}
          style={{ width: 60 }}
          onChange={(e) => update({ [e.target.name]: Number.parseInt(e.target.value, 10) })}
        />
        <span> {res.get("abbreviateShortWordDesc2")}</span>
        <label>
          {res.get("lookupWithCapitalized")}
          <input
            type="checkbox"
            onChange={(e) => update({ lookupWithCapitalized: e.target.checked })}
            checked={lookupWithCapitalized}
          />
        </label>
        <label>
          {res.get("parseWordsLimit")}
          &nbsp;
          <input
            type="number"
            value={parseWordsLimit}
            onChange={(e) => update({ parseWordsLimit: Number.parseInt(e.target.value, 10) })}
            style={{ width: 60 }}
          />
        </label>
        <label>{res.get("pdfUrlPattern")}</label>
        &nbsp;
        <input
          type="text"
          value={pdfUrl}
          onChange={(e) => update({ pdfUrl: e.target.value })}
          style={{ width: 600 }}
          placeholder="\.pdf$"
        />
        <label>
          {res.get("domType")}
          <a
            href="https://github.com/wtetsu/mouse-dictionary/wiki/DOM-Type"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline", fontSize: "medium" }}
          >
            ?
          </a>
        </label>
        <div style={{ marginLeft: 10, marginBottom: 10 }}>
          <label style={{ marginRight: 20 }}>
            <input
              type="radio"
              name="domType"
              value="shadow"
              checked={domType === "shadow"}
              onChange={(e) => update({ domType: e.target.value as "shadow" })}
            />
            Shadow DOM
          </label>
          <label>
            <input
              type="radio"
              name="domType"
              value="light"
              checked={domType === "light"}
              onChange={(e) => update({ domType: e.target.value as "light" })}
            />
            Light DOM
          </label>
        </div>
        <h3>
          {res.get("htmlTemplate")}
          <a
            href="https://github.com/wtetsu/mouse-dictionary/wiki/HTML-templates"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline", fontSize: "medium" }}
          >
            ?
          </a>
        </h3>
        <label>{res.get("htmlTemplateWindow")}</label>
        <HighlightEditor
          mode="html"
          theme="xcode"
          onChange={(value) => update({ dialogTemplate: value })}
          value={dialogTemplate}
          style={{ height: 250 }}
        />
        <label>{res.get("htmlTemplateDesc")}</label>
        <HighlightEditor
          mode="html"
          theme="xcode"
          onChange={(value) => update({ contentWrapperTemplate: value })}
          value={contentWrapperTemplate}
          style={{ height: 70 }}
        />
        <label>{res.get("htmlTemplateDescText")}</label>
        <HighlightEditor
          mode="html"
          theme="xcode"
          onChange={(value) => update({ contentTemplate: value })}
          value={contentTemplate}
          style={{ height: 400 }}
        />
        <h3>{res.get("styles")}</h3>
        <label>{res.get("stylesActive")}</label>
        <HighlightEditor
          mode="json"
          theme="tomorrow"
          onChange={(value) => update({ normalDialogStyles: value })}
          value={normalDialogStyles}
          style={{ height: 85 }}
        />
        <label>{res.get("stylesMoving")}</label>
        <HighlightEditor
          mode="json"
          theme="tomorrow"
          onChange={(json) => update({ movingDialogStyles: json })}
          value={movingDialogStyles}
          style={{ height: 85 }}
        />
        <label>{res.get("stylesInactive")}</label>
        <HighlightEditor
          mode="json"
          theme="tomorrow"
          onChange={(value) => update({ hiddenDialogStyles: value })}
          value={hiddenDialogStyles}
          style={{ height: 85 }}
        />
        <h3>{res.get("replaceRules")}</h3>
        <ReplaceRuleEditor
          replaceRules={props.settings.replaceRules}
          onUpdate={(rules) => update({ replaceRules: rules })}
        />
      </fieldset>
    </form>
  );
};
