import http from '@/common/http'
import { Cluster, Log, Dashboard, Zone } from '@/types/config'

export const getClusterConfigs = (): Promise<Cluster> => http.get('/configs/cluster')

export const updateClusterConfigs = (data: Cluster): Promise<Cluster> =>
  http.put('/configs/cluster', data)

export const getLogConfigs = (): Promise<Log> => http.get('/configs/log')

export const updateLogConfigs = (data: Log): Promise<Log> => http.put('/configs/log', data)

export const getDashboardConfigs = (): Promise<Dashboard> => http.get('/configs/dashboard')

export const updateDashboardConfigs = (data: Dashboard): Promise<Dashboard> =>
  http.put('/configs/dashboard', data)

export const getZoneConfigs = (): Promise<Zone> => http.get('/configs/zones')

export const updateZoneConfigs = (data: Zone): Promise<Zone> => http.put('/configs/zones', data)
