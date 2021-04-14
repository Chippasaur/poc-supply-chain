import type { NextApiResponse, NextApiRequest } from 'next'
import type { RequestHandler as NextConnectRequestHandler, Middleware as NextConnectMiddlware } from 'next-connect'

export interface ActivityResponse {
  id: string
  companyId: string
  content: string
  lastUpdatedAt: Date
  createdAt: Date
}

export type Middleware<ReturnType = undefined, ExtendedApiRequest = any> = NextConnectMiddlware<
  NextApiRequest & ExtendedApiRequest,
  NextApiResponse<ReturnType>
>

export type RequestHandler<ReturnType = undefined, ExtendedApiRequest = any> = NextConnectRequestHandler<
  NextApiRequest & ExtendedApiRequest,
  NextApiResponse<ReturnType>
>

export interface ActivityResponse {
  id: string
  companyId: string
  content: string
  lastUpdatedAt: Date
  createdAt: Date
}

export interface NewsResponse {
  id: string
  companyId: string
  title: string
  content: string
  lastUpdatedAt: Date
  createdAt: Date
}
