;(() => {
  var a = {}
  ;((a.id = 569),
    (a.ids = [569]),
    (a.modules = {
      261: (a) => {
        'use strict'
        a.exports = require('next/dist/shared/lib/router/utils/app-paths')
      },
      794: (a, b, c) => {
        'use strict'
        c.d(b, { N: () => e, q: () => d })
        let d = { lat: 35.6595, lng: 139.7005 },
          e = [{ id: 1, lat: d.lat, lng: d.lng, address: 'PINの取得が失敗' }]
      },
      846: (a) => {
        'use strict'
        a.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      932: (a, b, c) => {
        'use strict'
        c.d(b, { R: () => f })
        var d = c(8301),
          e = c(833)
        let f = ({ position: a, onClick: b }) => {
          let c = (0, e.T6)(),
            f = (0, d.useRef)(b)
          return (
            (f.current = b),
            (0, d.useEffect)(() => {
              if (!c) return
              let b = new google.maps.marker.AdvancedMarkerElement({ map: c, position: a }),
                d = b.addListener('gmp-click', () => {
                  f.current?.()
                })
              return () => {
                ;(google.maps.event.removeListener(d), (b.map = null))
              }
            }, [c, a.lat, a.lng]),
            null
          )
        }
      },
      1025: (a) => {
        'use strict'
        a.exports = require('next/dist/server/app-render/dynamic-access-async-storage.external.js')
      },
      1428: (a, b, c) => {
        'use strict'
        c.d(b, { O: () => f })
        var d = c(8301),
          e = c(794)
        let f = () => {
          let [a, b] = (0, d.useState)(e.q)
          return (
            (0, d.useEffect)(() => {
              navigator.geolocation.getCurrentPosition(
                (a) => {
                  b({ lat: a.coords.latitude, lng: a.coords.longitude })
                },
                (a) => {
                  ;(console.error('位置情報の取得に失敗しました:', a),
                    alert('位置情報取得できませんでした。'),
                    b(e.q))
                },
              )
            }, []),
            a
          )
        }
      },
      1857: (a, b, c) => {
        Promise.resolve().then(c.bind(c, 8431))
      },
      1872: (a, b, c) => {
        'use strict'
        ;(c.r(b),
          c.d(b, {
            GlobalError: () => E.a,
            __next_app__: () => K,
            handler: () => M,
            pages: () => J,
            routeModule: () => L,
            tree: () => I,
          }))
        var d = c(9754),
          e = c(9117),
          f = c(6595),
          g = c(2324),
          h = c(9326),
          i = c(8928),
          j = c(175),
          k = c(12),
          l = c(4290),
          m = c(2696),
          n = c(2574),
          o = c(2802),
          p = c(7533),
          q = c(5229),
          r = c(2822),
          s = c(261),
          t = c(6453),
          u = c(2474),
          v = c(6713),
          w = c(1356),
          x = c(2685),
          y = c(6225),
          z = c(3446),
          A = c(2762),
          B = c(5742),
          C = c(6439),
          D = c(1170),
          E = c.n(D),
          F = c(2506),
          G = c(1203),
          H = {}
        for (let a in F)
          0 >
            [
              'default',
              'tree',
              'pages',
              'GlobalError',
              '__next_app__',
              'routeModule',
              'handler',
            ].indexOf(a) && (H[a] = () => F[a])
        c.d(b, H)
        let I = {
            children: [
              '',
              {
                children: [
                  '(app)',
                  {
                    children: [
                      'edit-pin',
                      {
                        children: [
                          '[pinId]',
                          {
                            children: [
                              '__PAGE__',
                              {},
                              {
                                page: [
                                  () => Promise.resolve().then(c.bind(c, 8292)),
                                  '/Users/luke/LDH/Works/VendingMachine/Vending_Machine_FE/src/app/(app)/edit-pin/[pinId]/page.tsx',
                                ],
                              },
                            ],
                          },
                          {},
                        ],
                      },
                      {},
                    ],
                  },
                  {
                    layout: [
                      () => Promise.resolve().then(c.bind(c, 6553)),
                      '/Users/luke/LDH/Works/VendingMachine/Vending_Machine_FE/src/app/(app)/layout.tsx',
                    ],
                    'not-found': [
                      () => Promise.resolve().then(c.t.bind(c, 7028, 23)),
                      'next/dist/client/components/builtin/not-found.js',
                    ],
                    forbidden: [
                      () => Promise.resolve().then(c.t.bind(c, 461, 23)),
                      'next/dist/client/components/builtin/forbidden.js',
                    ],
                    unauthorized: [
                      () => Promise.resolve().then(c.t.bind(c, 2768, 23)),
                      'next/dist/client/components/builtin/unauthorized.js',
                    ],
                  },
                ],
              },
              {
                layout: [
                  () => Promise.resolve().then(c.bind(c, 1472)),
                  '/Users/luke/LDH/Works/VendingMachine/Vending_Machine_FE/src/app/layout.tsx',
                ],
                'global-error': [
                  () => Promise.resolve().then(c.t.bind(c, 1170, 23)),
                  'next/dist/client/components/builtin/global-error.js',
                ],
                'not-found': [
                  () => Promise.resolve().then(c.t.bind(c, 7028, 23)),
                  'next/dist/client/components/builtin/not-found.js',
                ],
                forbidden: [
                  () => Promise.resolve().then(c.t.bind(c, 461, 23)),
                  'next/dist/client/components/builtin/forbidden.js',
                ],
                unauthorized: [
                  () => Promise.resolve().then(c.t.bind(c, 2768, 23)),
                  'next/dist/client/components/builtin/unauthorized.js',
                ],
              },
            ],
          }.children,
          J = [
            '/Users/luke/LDH/Works/VendingMachine/Vending_Machine_FE/src/app/(app)/edit-pin/[pinId]/page.tsx',
          ],
          K = { require: c, loadChunk: () => Promise.resolve() },
          L = new d.AppPageRouteModule({
            definition: {
              kind: e.RouteKind.APP_PAGE,
              page: '/(app)/edit-pin/[pinId]/page',
              pathname: '/edit-pin/[pinId]',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: I },
            distDir: '.next',
            relativeProjectDir: '',
          })
        async function M(a, b, d) {
          var D
          let H = '/(app)/edit-pin/[pinId]/page'
          '/index' === H && (H = '/')
          let N = (0, h.getRequestMeta)(a, 'postponed'),
            O = (0, h.getRequestMeta)(a, 'minimalMode'),
            P = await L.prepare(a, b, { srcPage: H, multiZoneDraftMode: !1 })
          if (!P)
            return (
              (b.statusCode = 400),
              b.end('Bad Request'),
              null == d.waitUntil || d.waitUntil.call(d, Promise.resolve()),
              null
            )
          let {
              buildId: Q,
              query: R,
              params: S,
              parsedUrl: T,
              pageIsDynamic: U,
              buildManifest: V,
              nextFontManifest: W,
              reactLoadableManifest: X,
              serverActionsManifest: Y,
              clientReferenceManifest: Z,
              subresourceIntegrityManifest: $,
              prerenderManifest: _,
              isDraftMode: aa,
              resolvedPathname: ab,
              revalidateOnlyGenerated: ac,
              routerServerContext: ad,
              nextConfig: ae,
              interceptionRoutePatterns: af,
            } = P,
            ag = T.pathname || '/',
            ah = (0, s.normalizeAppPath)(H),
            { isOnDemandRevalidate: ai } = P,
            aj = L.match(ag, _),
            ak = !!_.routes[ab],
            al = !!(aj || ak || _.routes[ah]),
            am = a.headers['user-agent'] || '',
            an = (0, v.getBotType)(am),
            ao = (0, q.isHtmlBotRequest)(a),
            ap =
              (0, h.getRequestMeta)(a, 'isPrefetchRSCRequest') ??
              '1' === a.headers[u.NEXT_ROUTER_PREFETCH_HEADER],
            aq = (0, h.getRequestMeta)(a, 'isRSCRequest') ?? (0, n.f)(a.headers[u.RSC_HEADER]),
            ar = (0, t.getIsPossibleServerAction)(a),
            as =
              (0, m.checkIsAppPPREnabled)(ae.experimental.ppr) &&
              (null == (D = _.routes[ah] ?? _.dynamicRoutes[ah]) ? void 0 : D.renderingMode) ===
                'PARTIALLY_STATIC',
            at = !1,
            au = !1,
            av = as ? N : void 0,
            aw = as && aq && !ap,
            ax = (0, h.getRequestMeta)(a, 'segmentPrefetchRSCRequest'),
            ay = !am || (0, q.shouldServeStreamingMetadata)(am, ae.htmlLimitedBots)
          ao && as && ((al = !1), (ay = !1))
          let az = !0 === L.isDev || !al || 'string' == typeof N || aw,
            aA = ao && as,
            aB = null
          aa || !al || az || ar || av || aw || (aB = ab)
          let aC = aB
          ;(!aC && L.isDev && (aC = ab), L.isDev || aa || !al || !aq || aw || (0, k.d)(a.headers))
          let aD = {
            ...F,
            tree: I,
            pages: J,
            GlobalError: E(),
            handler: M,
            routeModule: L,
            __next_app__: K,
          }
          Y &&
            Z &&
            (0, p.setReferenceManifestsSingleton)({
              page: H,
              clientReferenceManifest: Z,
              serverActionsManifest: Y,
              serverModuleMap: (0, r.createServerModuleMap)({ serverActionsManifest: Y }),
            })
          let aE = a.method || 'GET',
            aF = (0, g.getTracer)(),
            aG = aF.getActiveScopeSpan()
          try {
            let f = L.getVaryHeader(ab, af)
            b.setHeader('Vary', f)
            let k = async (c, d) => {
                let e = new l.NodeNextRequest(a),
                  f = new l.NodeNextResponse(b)
                return L.render(e, f, d).finally(() => {
                  if (!c) return
                  c.setAttributes({ 'http.status_code': b.statusCode, 'next.rsc': !1 })
                  let d = aF.getRootSpanAttributes()
                  if (!d) return
                  if (d.get('next.span_type') !== i.BaseServerSpan.handleRequest)
                    return void console.warn(
                      `Unexpected root span type '${d.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`,
                    )
                  let e = d.get('next.route')
                  if (e) {
                    let a = `${aE} ${e}`
                    ;(c.setAttributes({ 'next.route': e, 'http.route': e, 'next.span_name': a }),
                      c.updateName(a))
                  } else c.updateName(`${aE} ${a.url}`)
                })
              },
              m = async ({ span: e, postponed: f, fallbackRouteParams: g }) => {
                let i = {
                    query: R,
                    params: S,
                    page: ah,
                    sharedContext: { buildId: Q },
                    serverComponentsHmrCache: (0, h.getRequestMeta)(a, 'serverComponentsHmrCache'),
                    fallbackRouteParams: g,
                    renderOpts: {
                      App: () => null,
                      Document: () => null,
                      pageConfig: {},
                      ComponentMod: aD,
                      Component: (0, j.T)(aD),
                      params: S,
                      routeModule: L,
                      page: H,
                      postponed: f,
                      shouldWaitOnAllReady: aA,
                      serveStreamingMetadata: ay,
                      supportsDynamicResponse: 'string' == typeof f || az,
                      buildManifest: V,
                      nextFontManifest: W,
                      reactLoadableManifest: X,
                      subresourceIntegrityManifest: $,
                      serverActionsManifest: Y,
                      clientReferenceManifest: Z,
                      setIsrStatus: null == ad ? void 0 : ad.setIsrStatus,
                      dir: c(9902).join(process.cwd(), L.relativeProjectDir),
                      isDraftMode: aa,
                      isRevalidate: al && !f && !aw,
                      botType: an,
                      isOnDemandRevalidate: ai,
                      isPossibleServerAction: ar,
                      assetPrefix: ae.assetPrefix,
                      nextConfigOutput: ae.output,
                      crossOrigin: ae.crossOrigin,
                      trailingSlash: ae.trailingSlash,
                      previewProps: _.preview,
                      deploymentId: ae.deploymentId,
                      enableTainting: ae.experimental.taint,
                      htmlLimitedBots: ae.htmlLimitedBots,
                      devtoolSegmentExplorer: ae.experimental.devtoolSegmentExplorer,
                      reactMaxHeadersLength: ae.reactMaxHeadersLength,
                      multiZoneDraftMode: !1,
                      incrementalCache: (0, h.getRequestMeta)(a, 'incrementalCache'),
                      cacheLifeProfiles: ae.experimental.cacheLife,
                      basePath: ae.basePath,
                      serverActions: ae.experimental.serverActions,
                      ...(at
                        ? {
                            nextExport: !0,
                            supportsDynamicResponse: !1,
                            isStaticGeneration: !0,
                            isRevalidate: !0,
                            isDebugDynamicAccesses: at,
                          }
                        : {}),
                      experimental: {
                        isRoutePPREnabled: as,
                        expireTime: ae.expireTime,
                        staleTimes: ae.experimental.staleTimes,
                        cacheComponents: !!ae.experimental.cacheComponents,
                        clientSegmentCache: !!ae.experimental.clientSegmentCache,
                        clientParamParsing: !!ae.experimental.clientParamParsing,
                        dynamicOnHover: !!ae.experimental.dynamicOnHover,
                        inlineCss: !!ae.experimental.inlineCss,
                        authInterrupts: !!ae.experimental.authInterrupts,
                        clientTraceMetadata: ae.experimental.clientTraceMetadata || [],
                      },
                      waitUntil: d.waitUntil,
                      onClose: (a) => {
                        b.on('close', a)
                      },
                      onAfterTaskError: () => {},
                      onInstrumentationRequestError: (b, c, d) => L.onRequestError(a, b, d, ad),
                      err: (0, h.getRequestMeta)(a, 'invokeError'),
                      dev: L.isDev,
                    },
                  },
                  l = await k(e, i),
                  { metadata: m } = l,
                  { cacheControl: n, headers: o = {}, fetchTags: p } = m
                if (
                  (p && (o[z.NEXT_CACHE_TAGS_HEADER] = p),
                  (a.fetchMetrics = m.fetchMetrics),
                  al && (null == n ? void 0 : n.revalidate) === 0 && !L.isDev && !as)
                ) {
                  let a = m.staticBailoutInfo,
                    b = Object.defineProperty(
                      Error(`Page changed from static to dynamic at runtime ${ab}${(null == a ? void 0 : a.description) ? `, reason: ${a.description}` : ''}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),
                      '__NEXT_ERROR_CODE',
                      { value: 'E132', enumerable: !1, configurable: !0 },
                    )
                  if (null == a ? void 0 : a.stack) {
                    let c = a.stack
                    b.stack = b.message + c.substring(c.indexOf('\n'))
                  }
                  throw b
                }
                return {
                  value: {
                    kind: w.CachedRouteKind.APP_PAGE,
                    html: l,
                    headers: o,
                    rscData: m.flightData,
                    postponed: m.postponed,
                    status: m.statusCode,
                    segmentData: m.segmentData,
                  },
                  cacheControl: n,
                }
              },
              n = async ({ hasResolved: c, previousCacheEntry: f, isRevalidating: g, span: i }) => {
                let j,
                  k = !1 === L.isDev,
                  l = c || b.writableEnded
                if (ai && ac && !f && !O)
                  return (
                    (null == ad ? void 0 : ad.render404)
                      ? await ad.render404(a, b)
                      : ((b.statusCode = 404), b.end('This page could not be found')),
                    null
                  )
                if (
                  (aj && (j = (0, x.parseFallbackField)(aj.fallback)),
                  j === x.FallbackMode.PRERENDER &&
                    (0, v.isBot)(am) &&
                    (!as || ao) &&
                    (j = x.FallbackMode.BLOCKING_STATIC_RENDER),
                  (null == f ? void 0 : f.isStale) === -1 && (ai = !0),
                  ai &&
                    (j !== x.FallbackMode.NOT_FOUND || f) &&
                    (j = x.FallbackMode.BLOCKING_STATIC_RENDER),
                  !O &&
                    j !== x.FallbackMode.BLOCKING_STATIC_RENDER &&
                    aC &&
                    !l &&
                    !aa &&
                    U &&
                    (k || !ak))
                ) {
                  let b
                  if ((k || aj) && j === x.FallbackMode.NOT_FOUND) throw new C.NoFallbackError()
                  if (as && !aq) {
                    let c =
                      'string' == typeof (null == aj ? void 0 : aj.fallback)
                        ? aj.fallback
                        : k
                          ? ah
                          : null
                    if (
                      ((b = await L.handleResponse({
                        cacheKey: c,
                        req: a,
                        nextConfig: ae,
                        routeKind: e.RouteKind.APP_PAGE,
                        isFallback: !0,
                        prerenderManifest: _,
                        isRoutePPREnabled: as,
                        responseGenerator: async () =>
                          m({
                            span: i,
                            postponed: void 0,
                            fallbackRouteParams: k || au ? (0, o.u)(ah) : null,
                          }),
                        waitUntil: d.waitUntil,
                      })),
                      null === b)
                    )
                      return null
                    if (b) return (delete b.cacheControl, b)
                  }
                }
                let n = ai || g || !av ? void 0 : av
                if (at && void 0 !== n)
                  return {
                    cacheControl: { revalidate: 1, expire: void 0 },
                    value: {
                      kind: w.CachedRouteKind.PAGES,
                      html: y.default.EMPTY,
                      pageData: {},
                      headers: void 0,
                      status: void 0,
                    },
                  }
                let p =
                  U && as && ((0, h.getRequestMeta)(a, 'renderFallbackShell') || au)
                    ? (0, o.u)(ag)
                    : null
                return m({ span: i, postponed: n, fallbackRouteParams: p })
              },
              p = async (c) => {
                var f, g, i, j, k
                let l,
                  o = await L.handleResponse({
                    cacheKey: aB,
                    responseGenerator: (a) => n({ span: c, ...a }),
                    routeKind: e.RouteKind.APP_PAGE,
                    isOnDemandRevalidate: ai,
                    isRoutePPREnabled: as,
                    req: a,
                    nextConfig: ae,
                    prerenderManifest: _,
                    waitUntil: d.waitUntil,
                  })
                if (
                  (aa &&
                    b.setHeader(
                      'Cache-Control',
                      'private, no-cache, no-store, max-age=0, must-revalidate',
                    ),
                  L.isDev && b.setHeader('Cache-Control', 'no-store, must-revalidate'),
                  !o)
                ) {
                  if (aB)
                    throw Object.defineProperty(
                      Error('invariant: cache entry required but not generated'),
                      '__NEXT_ERROR_CODE',
                      { value: 'E62', enumerable: !1, configurable: !0 },
                    )
                  return null
                }
                if ((null == (f = o.value) ? void 0 : f.kind) !== w.CachedRouteKind.APP_PAGE)
                  throw Object.defineProperty(
                    Error(
                      `Invariant app-page handler received invalid cache entry ${null == (i = o.value) ? void 0 : i.kind}`,
                    ),
                    '__NEXT_ERROR_CODE',
                    { value: 'E707', enumerable: !1, configurable: !0 },
                  )
                let p = 'string' == typeof o.value.postponed
                al &&
                  !aw &&
                  (!p || ap) &&
                  (O ||
                    b.setHeader(
                      'x-nextjs-cache',
                      ai ? 'REVALIDATED' : o.isMiss ? 'MISS' : o.isStale ? 'STALE' : 'HIT',
                    ),
                  b.setHeader(u.NEXT_IS_PRERENDER_HEADER, '1'))
                let { value: q } = o
                if (av) l = { revalidate: 0, expire: void 0 }
                else if (O && aq && !ap && as) l = { revalidate: 0, expire: void 0 }
                else if (!L.isDev)
                  if (aa) l = { revalidate: 0, expire: void 0 }
                  else if (al) {
                    if (o.cacheControl)
                      if ('number' == typeof o.cacheControl.revalidate) {
                        if (o.cacheControl.revalidate < 1)
                          throw Object.defineProperty(
                            Error(
                              `Invalid revalidate configuration provided: ${o.cacheControl.revalidate} < 1`,
                            ),
                            '__NEXT_ERROR_CODE',
                            { value: 'E22', enumerable: !1, configurable: !0 },
                          )
                        l = {
                          revalidate: o.cacheControl.revalidate,
                          expire:
                            (null == (j = o.cacheControl) ? void 0 : j.expire) ?? ae.expireTime,
                        }
                      } else l = { revalidate: z.CACHE_ONE_YEAR, expire: void 0 }
                  } else b.getHeader('Cache-Control') || (l = { revalidate: 0, expire: void 0 })
                if (
                  ((o.cacheControl = l),
                  'string' == typeof ax &&
                    (null == q ? void 0 : q.kind) === w.CachedRouteKind.APP_PAGE &&
                    q.segmentData)
                ) {
                  b.setHeader(u.NEXT_DID_POSTPONE_HEADER, '2')
                  let c = null == (k = q.headers) ? void 0 : k[z.NEXT_CACHE_TAGS_HEADER]
                  O && al && c && 'string' == typeof c && b.setHeader(z.NEXT_CACHE_TAGS_HEADER, c)
                  let d = q.segmentData.get(ax)
                  return void 0 !== d
                    ? (0, B.sendRenderResult)({
                        req: a,
                        res: b,
                        generateEtags: ae.generateEtags,
                        poweredByHeader: ae.poweredByHeader,
                        result: y.default.fromStatic(d, u.RSC_CONTENT_TYPE_HEADER),
                        cacheControl: o.cacheControl,
                      })
                    : ((b.statusCode = 204),
                      (0, B.sendRenderResult)({
                        req: a,
                        res: b,
                        generateEtags: ae.generateEtags,
                        poweredByHeader: ae.poweredByHeader,
                        result: y.default.EMPTY,
                        cacheControl: o.cacheControl,
                      }))
                }
                let r = (0, h.getRequestMeta)(a, 'onCacheEntry')
                if (
                  r &&
                  (await r(
                    { ...o, value: { ...o.value, kind: 'PAGE' } },
                    { url: (0, h.getRequestMeta)(a, 'initURL') },
                  ))
                )
                  return null
                if (p && av)
                  throw Object.defineProperty(
                    Error('Invariant: postponed state should not be present on a resume request'),
                    '__NEXT_ERROR_CODE',
                    { value: 'E396', enumerable: !1, configurable: !0 },
                  )
                if (q.headers) {
                  let a = { ...q.headers }
                  for (let [c, d] of ((O && al) || delete a[z.NEXT_CACHE_TAGS_HEADER],
                  Object.entries(a)))
                    if (void 0 !== d)
                      if (Array.isArray(d)) for (let a of d) b.appendHeader(c, a)
                      else ('number' == typeof d && (d = d.toString()), b.appendHeader(c, d))
                }
                let s = null == (g = q.headers) ? void 0 : g[z.NEXT_CACHE_TAGS_HEADER]
                if (
                  (O && al && s && 'string' == typeof s && b.setHeader(z.NEXT_CACHE_TAGS_HEADER, s),
                  !q.status || (aq && as) || (b.statusCode = q.status),
                  !O && q.status && G.RedirectStatusCode[q.status] && aq && (b.statusCode = 200),
                  p && b.setHeader(u.NEXT_DID_POSTPONE_HEADER, '1'),
                  aq && !aa)
                ) {
                  if (void 0 === q.rscData) {
                    if (q.postponed)
                      throw Object.defineProperty(
                        Error('Invariant: Expected postponed to be undefined'),
                        '__NEXT_ERROR_CODE',
                        { value: 'E372', enumerable: !1, configurable: !0 },
                      )
                    return (0, B.sendRenderResult)({
                      req: a,
                      res: b,
                      generateEtags: ae.generateEtags,
                      poweredByHeader: ae.poweredByHeader,
                      result: q.html,
                      cacheControl: aw ? { revalidate: 0, expire: void 0 } : o.cacheControl,
                    })
                  }
                  return (0, B.sendRenderResult)({
                    req: a,
                    res: b,
                    generateEtags: ae.generateEtags,
                    poweredByHeader: ae.poweredByHeader,
                    result: y.default.fromStatic(q.rscData, u.RSC_CONTENT_TYPE_HEADER),
                    cacheControl: o.cacheControl,
                  })
                }
                let t = q.html
                if (!p || O || aq)
                  return (0, B.sendRenderResult)({
                    req: a,
                    res: b,
                    generateEtags: ae.generateEtags,
                    poweredByHeader: ae.poweredByHeader,
                    result: t,
                    cacheControl: o.cacheControl,
                  })
                if (at)
                  return (
                    t.push(
                      new ReadableStream({
                        start(a) {
                          ;(a.enqueue(A.ENCODED_TAGS.CLOSED.BODY_AND_HTML), a.close())
                        },
                      }),
                    ),
                    (0, B.sendRenderResult)({
                      req: a,
                      res: b,
                      generateEtags: ae.generateEtags,
                      poweredByHeader: ae.poweredByHeader,
                      result: t,
                      cacheControl: { revalidate: 0, expire: void 0 },
                    })
                  )
                let v = new TransformStream()
                return (
                  t.push(v.readable),
                  m({ span: c, postponed: q.postponed, fallbackRouteParams: null })
                    .then(async (a) => {
                      var b, c
                      if (!a)
                        throw Object.defineProperty(
                          Error('Invariant: expected a result to be returned'),
                          '__NEXT_ERROR_CODE',
                          { value: 'E463', enumerable: !1, configurable: !0 },
                        )
                      if ((null == (b = a.value) ? void 0 : b.kind) !== w.CachedRouteKind.APP_PAGE)
                        throw Object.defineProperty(
                          Error(
                            `Invariant: expected a page response, got ${null == (c = a.value) ? void 0 : c.kind}`,
                          ),
                          '__NEXT_ERROR_CODE',
                          { value: 'E305', enumerable: !1, configurable: !0 },
                        )
                      await a.value.html.pipeTo(v.writable)
                    })
                    .catch((a) => {
                      v.writable.abort(a).catch((a) => {
                        console.error("couldn't abort transformer", a)
                      })
                    }),
                  (0, B.sendRenderResult)({
                    req: a,
                    res: b,
                    generateEtags: ae.generateEtags,
                    poweredByHeader: ae.poweredByHeader,
                    result: t,
                    cacheControl: { revalidate: 0, expire: void 0 },
                  })
                )
              }
            if (!aG)
              return await aF.withPropagatedContext(a.headers, () =>
                aF.trace(
                  i.BaseServerSpan.handleRequest,
                  {
                    spanName: `${aE} ${a.url}`,
                    kind: g.SpanKind.SERVER,
                    attributes: { 'http.method': aE, 'http.target': a.url },
                  },
                  p,
                ),
              )
            await p(aG)
          } catch (b) {
            throw (
              b instanceof C.NoFallbackError ||
                (await L.onRequestError(
                  a,
                  b,
                  {
                    routerKind: 'App Router',
                    routePath: H,
                    routeType: 'render',
                    revalidateReason: (0, f.c)({ isRevalidate: al, isOnDemandRevalidate: ai }),
                  },
                  ad,
                )),
              b
            )
          }
        }
      },
      1924: (a, b, c) => {
        'use strict'
        c.d(b, { E: () => h })
        var d = c(1124),
          e = c(6644)
        let f = (0, c(7321).R)((a, b) =>
          (0, d.jsx)(e.B, { align: 'center', ...a, direction: 'row', ref: b }),
        )
        f.displayName = 'HStack'
        var g = c(8755)
        let h = ({
          onSubmit: a,
          onCancel: b,
          isSubmitting: c = !1,
          submitText: e = 'ピンを追加',
          loadingText: h = '追加中...',
        }) =>
          (0, d.jsxs)(f, {
            spacing: 4,
            children: [
              (0, d.jsx)(g.$, {
                type: 'submit',
                colorScheme: 'blue',
                size: 'lg',
                onClick: a,
                isLoading: c,
                loadingText: h,
                children: e,
              }),
              (0, d.jsx)(g.$, {
                onClick: b,
                variant: 'outline',
                size: 'lg',
                isDisabled: c,
                children: 'キャンセル',
              }),
            ],
          })
      },
      2129: (a, b, c) => {
        Promise.resolve().then(c.bind(c, 2204))
      },
      2204: (a, b, c) => {
        'use strict'
        c.d(b, { default: () => r })
        var d = c(1124),
          e = c(8769),
          f = c(3244),
          g = c(4183),
          h = c(374),
          i = c(8301),
          j = c(2378),
          k = c(6463),
          l = c(4306),
          m = c(8291),
          n = c(1428),
          o = c(9074),
          p = c(7219),
          q = c(1924)
        let r = () => {
          let {
            formData: a,
            search: b,
            mapCenter: c,
            selectedLocation: r,
            isLoadingAddress: s,
            isLoading: t,
            isSubmitting: u,
            setSearch: v,
            handleSearch: w,
            handleMapClick: x,
            handleInputChange: y,
            handleUpdate: z,
            handleCancel: A,
          } = (() => {
            let a = (0, j.useRouter)(),
              b = (0, j.useParams)(),
              c = b?.pinId,
              { user: d } = (0, k.Jd)(),
              e = (0, n.O)(),
              [f, g] = (0, i.useState)(null),
              [h, o] = (0, i.useState)({
                machine_name: '',
                category: '飲料水',
                products: '',
                priceRange: '',
                description: '',
                manufacturer: '',
                address: '',
                lat: 0,
                lng: 0,
              }),
              [p, q] = (0, i.useState)(''),
              [r, s] = (0, i.useState)(e),
              [t, u] = (0, i.useState)(null),
              [v, w] = (0, i.useState)(!1),
              [x, y] = (0, i.useState)(!0),
              [z, A] = (0, i.useState)(!1)
            ;(0, i.useEffect)(() => {
              ;(async () => {
                if (!c) return
                ;(console.log('pinId from useParams:', c), console.log('pinId type:', typeof c))
                let b = c.replace(':1', ''),
                  e = parseInt(b)
                ;(console.log('cleanPinId:', b), console.log('numericPinId:', e))
                try {
                  y(!0)
                  let b = await (0, l.Nr)(e)
                  if (b.length > 0) {
                    let c = b[0]
                    if (
                      (console.log('APIレスポンス:', c),
                      console.log('latitude type:', typeof c.latitude, 'value:', c.latitude),
                      console.log('longitude type:', typeof c.longitude, 'value:', c.longitude),
                      d?.id !== c.user_id)
                    ) {
                      ;(alert('このピンを編集する権限がありません'), a.push('/'))
                      return
                    }
                    ;(g(c),
                      o({
                        machine_name: c.machine_name || '',
                        category: c.category_name || '飲料水',
                        products: c.product_name || '',
                        priceRange: c.price_range || '',
                        description: c.description || '',
                        manufacturer: c.manufacturer_name || '',
                        address: c.address || '',
                        lat: parseFloat(String(c.latitude)),
                        lng: parseFloat(String(c.longitude)),
                      }))
                    let e = {
                      lat: parseFloat(String(c.latitude)),
                      lng: parseFloat(String(c.longitude)),
                    }
                    ;(s(e), u(e))
                  } else (alert('ピンデータが見つかりません'), a.push('/'))
                } catch (b) {
                  ;(console.error('ピンデータ取得エラー:', b),
                    alert('ピンデータの取得に失敗しました'),
                    a.push('/'))
                } finally {
                  y(!1)
                }
              })()
            }, [c, d, a])
            let B = async (b) => {
              if ((b.preventDefault(), f)) {
                ;(console.log('pinData.pin_id:', f.pin_id),
                  console.log('pinData.pin_id type:', typeof f.pin_id),
                  A(!0))
                try {
                  ;(await (0, l.Hm)(f.pin_id, {
                    machine_name: h.machine_name,
                    address: h.address,
                    latitude: h.lat,
                    longitude: h.lng,
                  }),
                    f.machine_description_id &&
                      (await (0, l.LJ)(f.machine_description_id, h.description)),
                    f.vending_machine_id,
                    f.price_range_id && (await (0, l.CD)(f.price_range_id, h.priceRange)),
                    f.manufacturer_id && (await (0, l.Hv)(f.manufacturer_id, h.manufacturer)),
                    alert('更新完了'),
                    a.push('/'))
                } catch (a) {
                  ;(console.error('更新エラー:', a),
                    alert(a instanceof Error ? a.message : '更新失敗'))
                } finally {
                  A(!1)
                }
              }
            }
            return {
              pinData: f,
              formData: h,
              search: p,
              mapCenter: r,
              selectedLocation: t,
              isLoadingAddress: v,
              isLoading: x,
              isSubmitting: z,
              setSearch: q,
              handleSearch: async (a) => {
                if (a.trim())
                  try {
                    let b = await (0, m.f)(a)
                    b && (s(b), u(b), o((a) => ({ ...a, ...b })))
                  } catch (a) {
                    console.error('住所検索エラー:', a)
                  }
              },
              handleMapClick: async (a) => {
                if (!a.latLng) return
                let b = a.latLng.lat(),
                  c = a.latLng.lng()
                ;(u({ lat: b, lng: c }), o((a) => ({ ...a, lat: b, lng: c })), w(!0))
                try {
                  let a = await (0, m.R)(b, c)
                  a && o((b) => ({ ...b, address: a }))
                } catch (a) {
                  console.error('逆ジオコーディングエラー:', a)
                } finally {
                  w(!1)
                }
              },
              handleInputChange: (a, b) => {
                o((c) => ({ ...c, [a]: b }))
              },
              handleUpdate: B,
              handleCancel: () => {
                a.push('/')
              },
            }
          })()
          return t
            ? (0, d.jsx)(e.a, {
                p: 6,
                maxW: '1200px',
                mx: 'auto',
                children: (0, d.jsx)(f.T, {
                  spacing: 6,
                  align: 'stretch',
                  children: (0, d.jsx)(g.E, {
                    fontSize: '2xl',
                    fontWeight: 'bold',
                    children: '読み込み中...',
                  }),
                }),
              })
            : (0, d.jsx)(e.a, {
                p: 6,
                maxW: '1200px',
                mx: 'auto',
                children: (0, d.jsxs)(f.T, {
                  spacing: 6,
                  align: 'stretch',
                  children: [
                    (0, d.jsx)(g.E, {
                      fontSize: '2xl',
                      fontWeight: 'bold',
                      children: '自動販売機の情報を編集してください',
                    }),
                    (0, d.jsxs)(e.a, {
                      children: [
                        (0, d.jsx)(g.E, { mb: 2, fontWeight: 'bold', children: '場所を検索' }),
                        (0, d.jsx)(h.A, {
                          value: b,
                          onChange: (a) => {
                            v(a.target.value)
                          },
                          onKeyPress: (a) => {
                            'Enter' === a.key && w(a.currentTarget.value)
                          },
                          placeholder: '住所を検索してマップを移動（Enterキーで検索）',
                        }),
                      ],
                    }),
                    (0, d.jsx)(p.y, { center: c, zoom: 15, selectedLocation: r, onMapClick: x }),
                    (0, d.jsxs)(e.a, {
                      as: 'form',
                      onSubmit: z,
                      children: [
                        (0, d.jsx)(o.d, { formData: a, isLoadingAddress: s, onInputChange: y }),
                        (0, d.jsx)(q.E, {
                          onSubmit: z,
                          onCancel: A,
                          isSubmitting: u,
                          submitText: '更新',
                          loadingText: '更新中...',
                        }),
                      ],
                    }),
                  ],
                }),
              })
        }
      },
      3033: (a) => {
        'use strict'
        a.exports = require('next/dist/server/app-render/work-unit-async-storage.external.js')
      },
      3295: (a) => {
        'use strict'
        a.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      4306: (a, b, c) => {
        'use strict'
        c.d(b, { CD: () => h, Hm: () => f, Hv: () => i, LJ: () => g, Nr: () => e })
        var d = c(5745)
        let e = async (a) => {
            try {
              let b = await fetch(`${d.H}/vending_machines/by_pin/${a}`)
              if (!b.ok) throw Error(`HTTP error! status: ${b.status}`)
              return await b.json()
            } catch (a) {
              throw (console.error('PIN詳細情報取得エラー:', a), a)
            }
          },
          f = async (a, b) => {
            try {
              let c = await fetch(`${d.H}/pins/${a}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(b),
              })
              if (!c.ok) {
                let a = await c.json()
                throw Error(a.message || 'ピン更新に失敗しました')
              }
              return c.json()
            } catch (a) {
              throw (console.error('PIN更新エラー:', a), a)
            }
          },
          g = async (a, b) => {
            try {
              let c = await fetch(`${d.H}/machine_descriptions/${a}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ description: b }),
              })
              if (!c.ok) {
                let a = await c.json()
                throw Error(a.message || '説明更新に失敗しました')
              }
              return c.json()
            } catch (a) {
              throw (console.error('説明更新エラー:', a), a)
            }
          },
          h = async (a, b) => {
            try {
              let c = await fetch(`${d.H}/price_ranges/${a}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ price_range: b }),
              })
              if (!c.ok) {
                let a = await c.json()
                throw Error(a.message || '価格帯更新に失敗しました')
              }
              return c.json()
            } catch (a) {
              throw (console.error('価格帯更新エラー:', a), a)
            }
          },
          i = async (a, b) => {
            try {
              let c = await fetch(`${d.H}/manufacturers/${a}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ manufacturer_name: b }),
              })
              if (!c.ok) {
                let a = await c.json()
                throw Error(a.message || 'メーカー更新に失敗しました')
              }
              return c.json()
            } catch (a) {
              throw (console.error('メーカー更新エラー:', a), a)
            }
          }
      },
      5745: (a, b, c) => {
        'use strict'
        c.d(b, { H: () => d })
        let d = '/api'
      },
      6439: (a) => {
        'use strict'
        a.exports = require('next/dist/shared/lib/no-fallback-error.external')
      },
      6713: (a) => {
        'use strict'
        a.exports = require('next/dist/shared/lib/router/utils/is-bot')
      },
      7219: (a, b, c) => {
        'use strict'
        c.d(b, { y: () => k })
        var d = c(1124),
          e = c(833),
          f = c(8769),
          g = c(4183),
          h = c(932),
          i = c(8701)
        let j = { width: '100%', height: '400px' },
          k = ({ center: a, zoom: b, selectedLocation: c, onMapClick: k }) =>
            (0, d.jsxs)(f.a, {
              children: [
                (0, d.jsx)(g.E, { mb: 2, fontWeight: 'bold', children: 'クリックして場所を選択' }),
                (0, d.jsx)(e.u6, {
                  mapContainerStyle: j,
                  center: a,
                  zoom: b,
                  onClick: k,
                  options: i.n,
                  children: c && (0, d.jsx)(h.R, { position: c }),
                }),
              ],
            })
      },
      8291: (a, b, c) => {
        'use strict'
        c.d(b, { R: () => e, f: () => d })
        let d = async (a) => {
            if (!window.google || !window.google.maps)
              throw Error('Google Maps APIが読み込まれていません')
            let b = new window.google.maps.Geocoder(),
              c = await b.geocode({ address: a })
            if (c.results.length > 0) {
              let a = c.results[0].geometry.location
              return { lat: a.lat(), lng: a.lng() }
            }
            return null
          },
          e = async (a, b) => {
            if (!window.google || !window.google.maps)
              throw Error('Google Maps APIが読み込まれていません')
            let c = new window.google.maps.Geocoder(),
              d = await c.geocode({ location: { lat: a, lng: b } })
            return d.results.length > 0 ? d.results[0].formatted_address : null
          }
      },
      8292: (a, b, c) => {
        'use strict'
        ;(c.r(b), c.d(b, { default: () => f }))
        var d = c(5338),
          e = c(8431)
        function f() {
          return (0, d.jsx)(e.default, {})
        }
      },
      8354: (a) => {
        'use strict'
        a.exports = require('util')
      },
      8431: (a, b, c) => {
        'use strict'
        c.d(b, { default: () => d })
        let d = (0, c(7954).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/Users/luke/LDH/Works/VendingMachine/Vending_Machine_FE/src/views/EditPinPage.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.',
            )
          },
          '/Users/luke/LDH/Works/VendingMachine/Vending_Machine_FE/src/views/EditPinPage.tsx',
          'default',
        )
      },
      9074: (a, b, c) => {
        'use strict'
        c.d(b, { d: () => w })
        var d = c(1124),
          e = c(3244),
          f = c(4183),
          g = c(8769),
          h = c(3345),
          i = c(9167),
          j = c(236),
          k = c(391),
          l = c(8301),
          m = c(6951),
          n = c(7321),
          o = c(820)
        let p = (0, n.R)(function (a, b) {
          let { children: c, placeholder: e, className: f, ...g } = a
          return (0, d.jsxs)(o.B.select, {
            ...g,
            ref: b,
            className: (0, m.cx)('chakra-select', f),
            children: [e && (0, d.jsx)('option', { value: '', children: e }), c],
          })
        })
        p.displayName = 'SelectField'
        var q = c(9209),
          r = c(3094)
        let s = (0, n.R)((a, b) => {
          let c = (0, r.o)('Select', a),
            {
              rootProps: e,
              placeholder: f,
              icon: g,
              color: h,
              height: l,
              h: m,
              minH: n,
              minHeight: s,
              iconColor: t,
              iconSize: u,
              ...w
            } = (0, i.M)(a),
            [x, y] = (function (a, b) {
              let c = {},
                d = {}
              for (let [e, f] of Object.entries(a)) b.includes(e) ? (c[e] = f) : (d[e] = f)
              return [c, d]
            })(w, j.GF),
            z = (0, q.t)(y),
            A = { paddingEnd: '2rem', ...c.field, _focus: { zIndex: 'unset', ...c.field?._focus } }
          return (0, d.jsxs)(o.B.div, {
            className: 'chakra-select__wrapper',
            __css: { width: '100%', height: 'fit-content', position: 'relative', color: h },
            ...x,
            ...e,
            children: [
              (0, d.jsx)(p, {
                ref: b,
                height: m ?? l,
                minH: n ?? s,
                placeholder: f,
                ...z,
                __css: A,
                children: a.children,
              }),
              (0, d.jsx)(v, {
                'data-disabled': (0, k.s)(z.disabled),
                ...((t || h) && { color: t || h }),
                __css: c.icon,
                ...(u && { fontSize: u }),
                children: g,
              }),
            ],
          })
        })
        s.displayName = 'Select'
        let t = (a) =>
            (0, d.jsx)('svg', {
              viewBox: '0 0 24 24',
              ...a,
              children: (0, d.jsx)('path', {
                fill: 'currentColor',
                d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z',
              }),
            }),
          u = (0, o.B)('div', {
            baseStyle: {
              position: 'absolute',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
              top: '50%',
              transform: 'translateY(-50%)',
            },
          }),
          v = (a) => {
            let { children: b = (0, d.jsx)(t, {}), ...c } = a,
              e = (0, l.cloneElement)(b, {
                role: 'presentation',
                className: 'chakra-select__icon',
                focusable: !1,
                'aria-hidden': !0,
                style: { width: '1em', height: '1em', color: 'currentColor' },
              })
            return (0, d.jsx)(u, {
              ...c,
              className: 'chakra-select__icon-wrapper',
              children: (0, l.isValidElement)(b) ? e : null,
            })
          }
        v.displayName = 'SelectIcon'
        let w = ({ formData: a, isLoadingAddress: b, onInputChange: c }) =>
          (0, d.jsxs)(e.T, {
            spacing: 4,
            align: 'stretch',
            children: [
              (0, d.jsx)(f.E, { fontSize: 'xl', fontWeight: 'bold', children: '自動販売機の情報' }),
              (0, d.jsxs)(g.a, {
                children: [
                  (0, d.jsx)(f.E, { mb: 2, children: '*名前 *' }),
                  (0, d.jsx)(h.p, {
                    type: 'text',
                    placeholder: '自動販売機の名前',
                    value: a.machine_name,
                    onChange: (a) => c('machine_name', a.target.value),
                    required: !0,
                  }),
                ],
              }),
              (0, d.jsxs)(g.a, {
                children: [
                  (0, d.jsx)(f.E, { mb: 2, children: 'カテゴリ' }),
                  (0, d.jsxs)(s, {
                    value: a.category,
                    onChange: (a) => c('category', a.target.value),
                    children: [
                      (0, d.jsx)('option', { value: '飲料水', children: '飲料水' }),
                      (0, d.jsx)('option', { value: 'タバコ', children: 'タバコ' }),
                      (0, d.jsx)('option', { value: 'お酒', children: 'お酒' }),
                      (0, d.jsx)('option', { value: '食品', children: '食品' }),
                      (0, d.jsx)('option', { value: 'その他', children: 'その他' }),
                    ],
                  }),
                ],
              }),
              (0, d.jsxs)(g.a, {
                children: [
                  (0, d.jsx)(f.E, { mb: 2, children: '商品' }),
                  (0, d.jsx)(h.p, {
                    type: 'text',
                    placeholder: 'コーラ、水、お茶など 複数可',
                    value: a.products,
                    onChange: (a) => c('products', a.target.value),
                  }),
                ],
              }),
              (0, d.jsxs)(g.a, {
                children: [
                  (0, d.jsx)(f.E, { mb: 2, children: '価格帯' }),
                  (0, d.jsx)(h.p, {
                    type: 'text',
                    placeholder: '150円~200円',
                    value: a.priceRange,
                    onChange: (a) => c('priceRange', a.target.value),
                  }),
                ],
              }),
              (0, d.jsxs)(g.a, {
                children: [
                  (0, d.jsx)(f.E, { mb: 2, children: '説明' }),
                  (0, d.jsx)(h.p, {
                    type: 'text',
                    placeholder: '自動販売機の説明',
                    value: a.description,
                    onChange: (a) => c('description', a.target.value),
                  }),
                ],
              }),
              (0, d.jsxs)(g.a, {
                children: [
                  (0, d.jsx)(f.E, { mb: 2, children: '*業者名 *' }),
                  (0, d.jsx)(h.p, {
                    type: 'text',
                    placeholder: '業者名を入力してください',
                    value: a.manufacturer || '',
                    onChange: (a) => c('manufacturer', a.target.value),
                    required: !0,
                  }),
                ],
              }),
              (0, d.jsx)(f.E, {
                fontSize: 'xl',
                fontWeight: 'bold',
                children: '設置されている場所',
              }),
              (0, d.jsxs)(g.a, {
                children: [
                  (0, d.jsx)(f.E, { mb: 2, children: '* 住所 *' }),
                  (0, d.jsx)(h.p, {
                    type: 'text',
                    placeholder: b ? '住所を取得中...' : '住所',
                    value: a.address,
                    onChange: (a) => c('address', a.target.value),
                    required: !0,
                    isDisabled: b,
                  }),
                  b &&
                    (0, d.jsx)(f.E, {
                      fontSize: 'sm',
                      color: 'blue.500',
                      mt: 1,
                      children: '住所を取得中...',
                    }),
                ],
              }),
              (0, d.jsxs)(g.a, {
                children: [
                  (0, d.jsx)(f.E, { mb: 2, children: '緯度' }),
                  (0, d.jsx)(h.p, {
                    type: 'text',
                    value: 0 !== a.lat || 0 !== a.lng ? a.lat.toFixed(6) : '',
                    isReadOnly: !0,
                    placeholder: '地図をクリックすると自動入力',
                  }),
                ],
              }),
              (0, d.jsxs)(g.a, {
                children: [
                  (0, d.jsx)(f.E, { mb: 2, children: '経度' }),
                  (0, d.jsx)(h.p, {
                    type: 'text',
                    value: 0 !== a.lat || 0 !== a.lng ? a.lng.toFixed(6) : '',
                    isReadOnly: !0,
                    placeholder: '地図をクリックすると自動入力',
                  }),
                ],
              }),
            ],
          })
      },
      9121: (a) => {
        'use strict'
        a.exports = require('next/dist/server/app-render/action-async-storage.external.js')
      },
      9294: (a) => {
        'use strict'
        a.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
      9902: (a) => {
        'use strict'
        a.exports = require('path')
      },
    }))
  var b = require('../../../../webpack-runtime.js')
  b.C(a)
  var c = b.X(0, [838, 901, 381], () => b((b.s = 1872)))
  module.exports = c
})()
