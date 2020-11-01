import { Searcher } from "../types";
import {
  AbuseIPDB,
  AnyRun,
  Apklab,
  ArchiveOrg,
  ArchiveToday,
  Auth0,
  BGPView,
  BinaryEdge,
  BitcoinAbuse,
  BitcoinWhosWho,
  BlockChain,
  Blockchair,
  BlockCypher,
  Censys,
  Crtsh,
  DNSlytics,
  DomainBigData,
  DomainTools,
  DomainWatch,
  EmailRep,
  ExploitDatabase,
  FOFA,
  FortiGuard,
  GoogleSafeBrowsing,
  GreyNoise,
  Hashdd,
  HurricaneElectric,
  HybridAnalysis,
  InQuest,
  IntelligenceX,
  Intezer,
  IPinfo,
  IPIP,
  JoeSandbox,
  Malshare,
  Maltiverse,
  MalwareBazaar,
  Malwares,
  NVD,
  OCCRP,
  ONYPHE,
  OpenTIP,
  OTX,
  PublicWWW,
  Pulsedive,
  Radar,
  RiskIQ,
  Robtex,
  Scumware,
  SecurityTrails,
  Shodan,
  Sploitus,
  SpyOnWeb,
  Spyse,
  Talos,
  ThreatConnect,
  ThreatCrowd,
  ThreatMiner,
  TIP,
  Triage,
  URLhaus,
  Urlscan,
  ViewDNS,
  VirusTotal,
  VMRay,
  Vulmon,
  VulncodeDB,
  VxCube,
  WebAnalyzer,
  XForceExchange,
  ZoomEye,
} from ".";

export const Searchers: Searcher[] = [
  new AbuseIPDB(),
  new AnyRun(),
  new Apklab(),
  new ArchiveOrg(),
  new ArchiveToday(),
  new Auth0(),
  new BGPView(),
  new BinaryEdge(),
  new BitcoinAbuse(),
  new BitcoinWhosWho(),
  new BlockChain(),
  new Blockchair(),
  new BlockCypher(),
  new Censys(),
  new Crtsh(),
  new DNSlytics(),
  new DomainBigData(),
  new DomainTools(),
  new DomainWatch(),
  new EmailRep(),
  new ExploitDatabase(),
  new FOFA(),
  new FortiGuard(),
  new GoogleSafeBrowsing(),
  new GreyNoise(),
  new Hashdd(),
  new HurricaneElectric(),
  new HybridAnalysis(),
  new InQuest(),
  new IntelligenceX(),
  new Intezer(),
  new IPinfo(),
  new IPIP(),
  new JoeSandbox(),
  new Malshare(),
  new Maltiverse(),
  new MalwareBazaar(),
  new Malwares(),
  new NVD(),
  new OCCRP(),
  new ONYPHE(),
  new OpenTIP(),
  new OTX(),
  new PublicWWW(),
  new Pulsedive(),
  new Radar(),
  new RiskIQ(),
  new Robtex(),
  new Scumware(),
  new SecurityTrails(),
  new Shodan(),
  new Sploitus(),
  new SpyOnWeb(),
  new Spyse(),
  new Talos(),
  new ThreatConnect(),
  new ThreatCrowd(),
  new ThreatMiner(),
  new TIP(),
  new Triage(),
  new URLhaus(),
  new Urlscan(),
  new ViewDNS(),
  new VirusTotal(),
  new VMRay(),
  new Vulmon(),
  new VulncodeDB(),
  new VxCube(),
  new WebAnalyzer(),
  new XForceExchange(),
  new ZoomEye(),
];
