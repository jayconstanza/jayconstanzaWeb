import { ITextList } from "../interfaces/ITextList";

/**
 * @class Translation
 * @description class that describes translation objects for any language i18n we want to use
 * example: translation.es.appTitle
 */

export class Translation {
  private static instance: Translation;
  public textList: ITextList;
  /**
   * The Translation's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor(textList: ITextList) {
    this.textList = textList;
  }
  /**
   * The static method that controls the access to the Translation instance.
   *
   * This implementation let you subclass the Translation class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(textList: ITextList): Translation {
    if (!Translation.instance) {
      Translation.instance = new Translation(textList);
    }
    return Translation.instance;
  }
}
