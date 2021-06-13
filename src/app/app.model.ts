export interface _TInstanceState {
  localId: string;
  peerId: string;
  channelId: string;
  localFiles: IFileSending[];
  peerFiles: IFileSending[];
}
//
export interface _IFileSending {
  fileId: string;
  fileName: string;
  sendProcess: number;
  status: number;
  fileData: File;
  totalPart: number;
}
export interface IFileSending extends Partial<_IFileSending> {}
//
export interface _InitChanelResDTO {
  chanelId: string;
  accessKey: string;
}
export interface IInitChanelResDTO extends Partial<_InitChanelResDTO> {}

export interface _InitChanelReqDTO {
  peerId: string;
  files: IFileSending[];
}
export interface IInitChanelReqDTO extends Partial<_InitChanelReqDTO> {}

export interface _GetNextPartResDTO {
  peerId: string;
  fileId: string;
  partId: Number;
}
export interface IGetNextPartResDTO extends Partial<_GetNextPartResDTO> {}
export type isingal =
  | 'offer'
  | 'answer'
  | 'iceCandidate'
  | 'preflight'
  | 'closeChanel';
export interface _ISignalingMessage {
  from: string;
  to: string;
  content: isingal;
  data: any;
  info: IFileInformation;
}
export interface ISignalingMessage extends Partial<_ISignalingMessage> {}
export class SignalingMessage implements _ISignalingMessage {
  from: string;
  to: string;
  content: isingal;
  data: any;
  info: IFileInformation;
  constructor(from: string, to: string, content: isingal, data: any, info: IFileInformation = null) {
    this.from = from;
    this.to = to;
    this.content = content;
    this.data = data;
    this.info = info;
  }
}
export interface IFileInformation {
  fileId: string;
  fileName: string;
  fileSize: Number;
  totalPart: Number;
}
export interface IPreFlightModel {
  fileId: string;
  partId: Number;
}
