import * as React from 'react';
import "../scss/settings.scss";
import {Title} from "../../common/components/title";
import {SettingsClose} from "./settings-close";
import {GeneralPanel} from "./panels/general";
import {FilesPanel} from "./panels/files";

export interface SettingsProps {
  close: () => void;
}

export class Settings extends React.Component<SettingsProps> {
  public render() {
    return (
      <section className="settings" {...this.props}>
        <Title secondary={
          <SettingsClose close={this.props.close} />
        }>
          Settings
        </Title>
        <section className="settings-panels">
          <GeneralPanel />
          <FilesPanel />
        </section>
      </section>
    );
  }
}