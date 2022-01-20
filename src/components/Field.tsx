import React from 'react';
import { PlainClientAPI } from 'contentful-management';
import { Paragraph } from '@contentful/f36-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';
import {RichTextEditor} from '@contentful/field-editor-rich-text'

interface FieldProps {
  sdk: FieldExtensionSDK;
  cma: PlainClientAPI;
}

const Field = (props: FieldProps) => {
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  console.log('pute', props)

  return <RichTextEditor {...props}/>;
};

export default Field;
