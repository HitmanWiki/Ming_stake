(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    48689: function(e, t) {
        var n;
        !function() {
            "use strict";
            var a = {}.hasOwnProperty;
            function i() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var s = typeof n;
                        if ("string" === s || "number" === s)
                            e.push(n);
                        else if (Array.isArray(n)) {
                            if (n.length) {
                                var r = i.apply(null, n);
                                r && e.push(r)
                            }
                        } else if ("object" === s)
                            if (n.toString === Object.prototype.toString)
                                for (var u in n)
                                    a.call(n, u) && n[u] && e.push(u);
                            else
                                e.push(n.toString())
                    }
                }
                return e.join(" ")
            }
            e.exports ? (i.default = i,
            e.exports = i) : void 0 === (n = function() {
                return i
            }
            .apply(t, [])) || (e.exports = n)
        }()
    },
    40999: function(e, t, n) {
        "use strict";
        function a(e, t, n, a, i, s, r) {
            try {
                var u = e[s](r)
                  , o = u.value
            } catch (l) {
                return void n(l)
            }
            u.done ? t(o) : Promise.resolve(o).then(a, i)
        }
        function i(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(i, s) {
                    var r = e.apply(t, n);
                    function u(e) {
                        a(r, i, s, u, o, "next", e)
                    }
                    function o(e) {
                        a(r, i, s, u, o, "throw", e)
                    }
                    u(void 0)
                }
                ))
            }
        }
        n.d(t, {
            Z: function() {
                return i
            }
        })
    },
    15744: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return _
            }
        });
        var a = n(18635)
          , i = n(43689)
          , s = n(37548)
          , r = n(48689)
          , u = n.n(r)
          , o = n(87029)
          , l = n.n(o)
          , p = n(40999)
          , d = n(72277)
          , c = n(3242)
          , y = JSON.parse('[{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"contract IERC20","name":"token","type":"address"},{"components":[{"internalType":"uint256","name":"day","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"}],"internalType":"struct BitBookStaking.WithdrawFeeInterval[]","name":"_withdrawFee","type":"tuple[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"currentRewardBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accTokenPerShare","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenPerBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastRewardBlock","type":"uint256"}],"name":"AdminEmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"bool","name":"depositLocked","type":"bool"}],"name":"DepositLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"paused","type":"bool"}],"name":"PoolPausedUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenPerBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minDeposit","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"harvestInterval","type":"uint256"}],"name":"PoolUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountLockedUp","type":"uint256"}],"name":"RewardLockedUp","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"depositer","type":"address"},{"indexed":false,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardTokenDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_HARVEST_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenPerBlock","type":"uint256"},{"internalType":"contract IERC20","name":"_stakedToken","type":"address"},{"internalType":"contract IERC20","name":"_rewardToken","type":"address"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"_minDeposit","type":"uint256"},{"internalType":"uint256","name":"_harvestInterval","type":"uint256"},{"components":[{"internalType":"uint256","name":"day","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"}],"internalType":"struct BitBookStaking.WithdrawFeeInterval[]","name":"withdrawFeeIntervals","type":"tuple[]"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"canHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositRewardToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyAdminWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"},{"internalType":"uint256","name":"stakedTime","type":"uint256"}],"name":"getWithdrawFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"}],"name":"getWithdrawFeeIntervals","outputs":[{"components":[{"internalType":"uint256","name":"day","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"}],"internalType":"struct BitBookStaking.WithdrawFeeInterval[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"stakedToken","type":"address"},{"internalType":"contract IERC20","name":"rewardToken","type":"address"},{"internalType":"uint256","name":"stakedAmount","type":"uint256"},{"internalType":"uint256","name":"rewardSupply","type":"uint256"},{"internalType":"uint256","name":"tokenPerBlock","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accTokenPerShare","type":"uint256"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"minDeposit","type":"uint256"},{"internalType":"uint256","name":"harvestInterval","type":"uint256"},{"internalType":"bool","name":"lockDeposit","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardDistributions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardReserve","outputs":[{"internalType":"contract Reserve","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_tokenPerBlock","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"_minDeposit","type":"uint256"},{"internalType":"uint256","name":"_harvestInterval","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"bool","name":"locked","type":"bool"}],"name":"setLockDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_value","type":"bool"}],"name":"updatePaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"rewardLockedUp","type":"uint256"},{"internalType":"uint256","name":"nextHarvestUntil","type":"uint256"},{"internalType":"uint256","name":"depositTimestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"withdrawFee","outputs":[{"internalType":"uint256","name":"day","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"}],"stateMutability":"view","type":"function"}]')
          , m = n(34969)
          , v = n.n(m)
          , f = n(34363)
          , h = n(60511)
          , x = "0x09822D42D9e56348AC8Ae9E5ec3Ed42338f8D8D3"
          , k = "0xd67508233a9f6432748B895655f7DF90ccd17976"
          , T = "0x2C47D567a1b1737325f9C8de228BC45b4fd6dc0b"
          , w = 18
          , g = new (v())(10512e3)
          , b = function(e, t, n, a) {
            var i = new (v())(t).times(a).times(g)
              , s = new (v())(e).times(n)
              , r = i.div(s).times(100);
            return r.isNaN() || !r.isFinite() ? null : r.toNumber()
        };
        n(33618).Z.config({
            EXPONENTIAL_AT: 1e3,
            DECIMAL_PLACES: 80
        });
        var _ = function() {
            var e, t, n, r = (0,
            i.useState)(void 0), o = r[0], m = r[1], g = (0,
            i.useState)(!1), _ = (g[0],
            g[1],
            (0,
            i.useState)(!1)), j = (_[0],
            _[1],
            (0,
            i.useState)(!1)), N = (j[0],
            j[1],
            (0,
            i.useState)(!1)), B = N[0], P = N[1], S = (0,
            i.useState)(!1), M = S[0], A = S[1], I = (0,
            i.useState)(!1), E = (I[0],
            I[1],
            (0,
            d.KM)().account), F = (0,
            h.hB)(), O = (F.setOpen,
            F.deactivate), D = function() {
                var e = (0,
                i.useState)(void 0)
                  , t = e[0]
                  , n = e[1]
                  , a = (0,
                i.useState)(!1)
                  , s = a[0]
                  , r = a[1]
                  , u = (0,
                d.cq)(y, x)
                  , o = (0,
                d.Gt)(k, x)
                  , c = o.approve
                  , m = o.approveState
                  , v = (o.approvedBalance,
                o.isApproved);
                return {
                    stakePending: s,
                    stake: function() {
                        var e = (0,
                        p.Z)(l().mark((function e(t) {
                            return l().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        n(void 0),
                                        r(!0),
                                        e.next = 5,
                                        (0,
                                        d.wf)(u.deposit(0, t));
                                    case 5:
                                        r(!1),
                                        e.next = 13;
                                        break;
                                    case 8:
                                        e.prev = 8,
                                        e.t0 = e.catch(0),
                                        n(e.t0),
                                        console.log(e.t0),
                                        r(!1);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[0, 8]])
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    approve: function() {
                        return c()
                    },
                    isApproved: v,
                    approvedPending: m === d.ed.BUSY,
                    stakeError: t
                }
            }(), C = D.stake, L = D.approve, R = D.approvedPending, W = D.isApproved, V = D.stakePending, H = (D.stakeError,
            function() {
                var e = (0,
                i.useState)(void 0)
                  , t = e[0]
                  , n = e[1]
                  , a = (0,
                i.useState)(!1)
                  , s = a[0]
                  , r = a[1]
                  , u = (0,
                d.cq)(y, x);
                return {
                    unstake: function() {
                        var e = (0,
                        p.Z)(l().mark((function e(t) {
                            return l().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!u) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.prev = 1,
                                        r(!0),
                                        n(void 0),
                                        e.next = 6,
                                        (0,
                                        d.wf)(u.withdraw(0, t));
                                    case 6:
                                        r(!1),
                                        e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9,
                                        e.t0 = e.catch(1),
                                        n(e.t0),
                                        r(!1);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[1, 9]])
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    unstakePending: s,
                    unstakeError: t
                }
            }()), U = H.unstake, Z = H.unstakePending, G = (H.unstakeError,
            function() {
                var e = (0,
                i.useState)(void 0)
                  , t = e[0]
                  , n = e[1]
                  , a = (0,
                i.useState)(!1)
                  , s = a[0]
                  , r = a[1]
                  , u = (0,
                d.cq)(y, x);
                return {
                    harvest: function() {
                        var e = (0,
                        p.Z)(l().mark((function e() {
                            return l().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        n(void 0),
                                        r(!0),
                                        e.next = 5,
                                        (0,
                                        d.wf)(u.deposit(0, 0));
                                    case 5:
                                        r(!1),
                                        e.next = 13;
                                        break;
                                    case 8:
                                        e.prev = 8,
                                        e.t0 = e.catch(0),
                                        n(e.t0),
                                        console.log(e.t0),
                                        r(!1);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[0, 8]])
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    harvestPending: s,
                    harvestError: t
                }
            }()), K = G.harvest, q = (G.harvestError,
            G.harvestPending), X = function() {
                var e = (0,
                i.useState)(void 0)
                  , t = e[0]
                  , n = e[1]
                  , a = (0,
                i.useState)(!1)
                  , s = a[0]
                  , r = a[1]
                  , u = (0,
                d.cq)(y, x);
                return {
                    compound: function() {
                        var e = (0,
                        p.Z)(l().mark((function e(t) {
                            return l().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        n(void 0),
                                        r(!0),
                                        e.next = 5,
                                        (0,
                                        d.wf)(u.deposit(0, t.toString()));
                                    case 5:
                                        r(!1),
                                        e.next = 13;
                                        break;
                                    case 8:
                                        e.prev = 8,
                                        e.t0 = e.catch(0),
                                        n(e.t0),
                                        console.log(e.t0),
                                        r(!1);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[0, 8]])
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    compoundPending: s,
                    compoundError: t
                }
            }(), z = X.compound, J = (X.compoundError,
            X.compoundPending), Y = !V && !Z && !q && !J, Q = function() {
                var e = (0,
                d.VV)(k, w);
                return {
                    balance: e.balance,
                    displayBalance: e.displayBalance
                }
            }(), $ = Q.balance, ee = Q.displayBalance, te = function(e) {
                (0,
                h.yW)();
                var t = (0,
                d.JA)().fastRefresh
                  , n = (0,
                i.useState)(!1)
                  , a = n[0]
                  , s = n[1]
                  , r = (0,
                i.useState)({
                    reward: void 0,
                    displayReward: void 0,
                    amount: void 0,
                    displayAmount: void 0,
                    depositTime: void 0,
                    canHarvest: void 0,
                    stakedTime: void 0
                })
                  , u = r[0]
                  , o = r[1]
                  , m = (0,
                i.useState)(void 0)
                  , k = m[0]
                  , g = m[1]
                  , b = (0,
                i.useState)(void 0)
                  , _ = b[0]
                  , j = (b[1],
                (0,
                i.useState)(void 0))
                  , N = j[0]
                  , B = j[1]
                  , P = (0,
                i.useState)(void 0)
                  , S = P[0]
                  , M = P[1]
                  , A = (0,
                i.useState)(void 0)
                  , I = A[0]
                  , E = A[1]
                  , F = (0,
                d.KM)()
                  , O = F.ethers
                  , D = F.account
                  , C = F.displayAccount
                  , L = (0,
                d.cq)(y, x)
                  , R = (0,
                d.WT)(T, "WETH").lp;
                return (0,
                i.useEffect)((function() {
                    !function() {
                        var e = (0,
                        p.Z)(l().mark((function e() {
                            return l().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!L) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.t0 = g,
                                        e.t1 = d.Ob,
                                        e.next = 5,
                                        L.poolInfo(0);
                                    case 5:
                                        return e.t2 = e.sent.stakedAmount,
                                        e.t3 = (0,
                                        e.t1)(e.t2).div(new (v())(10).exponentiatedBy(w)),
                                        (0,
                                        e.t0)(e.t3),
                                        e.t4 = B,
                                        e.t5 = d.Ob,
                                        e.next = 12,
                                        L.poolInfo(0);
                                    case 12:
                                        e.t6 = e.sent.tokenPerBlock,
                                        e.t7 = (0,
                                        e.t5)(e.t6).div(new (v())(10).exponentiatedBy(w)),
                                        (0,
                                        e.t4)(e.t7);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()()
                }
                ), [L]),
                (0,
                i.useEffect)((function() {
                    O && D && e && function() {
                        var e = (0,
                        p.Z)(l().mark((function e() {
                            var t, n, a, i, r, u, p, m, h;
                            return l().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return s(!0),
                                        n = new c.m({
                                            ethersProvider: O,
                                            tryAggregate: !1
                                        }),
                                        a = [{
                                            reference: "stakeInfo",
                                            contractAddress: x,
                                            abi: y,
                                            calls: [{
                                                reference: "pendingToken",
                                                methodName: "pendingToken",
                                                methodParameters: [0, D]
                                            }, {
                                                reference: "userInfo",
                                                methodName: "userInfo",
                                                methodParameters: [0, D]
                                            }, {
                                                reference: "canHarvest",
                                                methodName: "canHarvest",
                                                methodParameters: [0, D]
                                            }, {
                                                reference: "poolInfo",
                                                methodName: "poolInfo",
                                                methodParameters: [0]
                                            }]
                                        }],
                                        e.next = 5,
                                        n.call(a);
                                    case 5:
                                        return i = e.sent,
                                        r = null === (t = i.results.stakeInfo) || void 0 === t ? void 0 : t.callsReturnContext,
                                        u = new (v())(r[1].returnValues[4].hex).toNumber(),
                                        p = {
                                            reward: (0,
                                            d.Ob)(r[0].returnValues[0]),
                                            displayReward: (0,
                                            d.Ob)(r[0].returnValues[0]).div(new (v())(10).exponentiatedBy(w)).toFormat(10),
                                            amount: (0,
                                            d.Ob)(r[1].returnValues[0]),
                                            displayAmount: (0,
                                            d.Ob)(r[1].returnValues[0]).div(new (v())(10).exponentiatedBy(w)).toFormat(10),
                                            depositTime: (0,
                                            d.Ob)(r[1].returnValues[4]).toNumber(),
                                            canHarvest: r[2].returnValues[0],
                                            stakedTime: (0,
                                            d.ab)(0 === u ? 0 : Date.now() / 1e3 - u)
                                        },
                                        o(p),
                                        s(!1),
                                        g((0,
                                        d.Ob)(r[3].returnValues[2]).div(new (v())(10).exponentiatedBy(w))),
                                        B((0,
                                        d.Ob)(r[3].returnValues[4]).div(new (v())(10).exponentiatedBy(w))),
                                        m = new f.CH(x,y,O),
                                        e.next = 16,
                                        m.getWithdrawFee(0, u);
                                    case 16:
                                        h = e.sent,
                                        E(h / 10),
                                        M(p.amount.times(h).div(1e3).div(new (v())(10).exponentiatedBy(w)).toNumber());
                                    case 19:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()()
                }
                ), [O, D, e, t]),
                {
                    price: null === R || void 0 === R ? void 0 : R.price.baseTokenPrice.toFixed(4),
                    displayAccount: C,
                    loading: a,
                    userDetails: u,
                    unstakeFee: S,
                    unstakeFeePercent: I,
                    totalStaked: k,
                    totalReward: _,
                    tokenPerBlock: N
                }
            }(Y), ne = (te.loading,
            te.price), ae = te.displayAccount, ie = te.userDetails, se = (te.totalReward,
            te.totalStaked), re = te.tokenPerBlock, ue = (te.unstakeFee,
            te.unstakeFeePercent,
            (0,
            d.fC)(null === $ || void 0 === $ ? void 0 : $.toFixed(0), w));
            (0,
            d.fC)(ie.amount, w),
            (0,
            s.useRouter)();
            (0,
            h.yW)();
            var oe = function(e) {
                return (parseFloat(e) * parseFloat(ne)).toLocaleString()
            };
            return (0,
            i.useEffect)((function() {
                if (ne && se && re) {
                    var e, t, n = null !== (e = null === (t = b(ne, ne, se, re)) || void 0 === t ? void 0 : t.toLocaleString()) && void 0 !== e ? e : 0;
                    m(n)
                }
            }
            ), [ne, se, re]),
            (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)("nav", {
                    className: "navbar navbar-expand-lg navbar-dark bg-primary-color",
                    children: [(0,
                    a.jsx)("a", {
                        className: "navbar-brand col-2 p-0",
                        href: "#",
                        children: (0,
                        a.jsx)("img", {
                            src: "",
                            alt: "",
                            height: "60px"
                        })
                    }),
                           
                    
                   
                    (0,
                    a.jsx)("div", {
                        className: " ",
                        children: (0,
                        a.jsxs)("div", {
                            className: u()("stakeMenu", {
                                open: M,
                                "d-none": !E
                            }),
                            children: [(0,
                            a.jsxs)("div", {
                                onClick: function() {
                                    A(!M),
                                    P(!0)
                                },
                                className: u()("menuHead", {
                                    open: M
                                }),
                                children: [(0,
                                a.jsx)("svg", {
                                    className: "btnWallet",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "37",
                                    height: "36",
                                    viewBox: "0 0 37 36",
                                    children: (0,
                                    a.jsxs)("g", {
                                        id: "Group_383",
                                        "data-name": "Group 383",
                                        transform: "translate(-1187 -20)",
                                        children: [(0,
                                        a.jsxs)("g", {
                                            id: "Ellipse_779",
                                            "data-name": "Ellipse 779",
                                            transform: "translate(1187 20)",
                                            fill: "#0239ab",
                                            stroke: "#3acc89",
                                            strokeWidth: "1.5",
                                            children: [(0,
                                            a.jsx)("ellipse", {
                                                cx: "18.5",
                                                cy: "18",
                                                rx: "18.5",
                                                ry: "18",
                                                stroke: "none"
                                            }), (0,
                                            a.jsx)("ellipse", {
                                                cx: "18.5",
                                                cy: "18",
                                                rx: "17.75",
                                                ry: "17.25",
                                                fill: "none"
                                            })]
                                        }), (0,
                                        a.jsx)("path", {
                                            id: "Icon_awesome-wallet",
                                            "data-name": "Icon awesome-wallet",
                                            d: "M16.273,5.637H2.823a.565.565,0,1,1,0-1.129H16.372a.564.564,0,0,0,.565-.565A1.694,1.694,0,0,0,15.243,2.25H2.258A2.258,2.258,0,0,0,0,4.508V15.8a2.258,2.258,0,0,0,2.258,2.258H16.273a1.747,1.747,0,0,0,1.792-1.694V7.331A1.747,1.747,0,0,0,16.273,5.637Zm-1.595,7.339a1.129,1.129,0,1,1,1.129-1.129A1.129,1.129,0,0,1,14.679,12.977Z",
                                            transform: "translate(1196.481 28.04)",
                                            fill: "#fff"
                                        })]
                                    })
                                }), (0,
                                a.jsxs)("div", {
                                    className: "addressLine",
                                    children: [(0,
                                    a.jsx)("span", {
                                        children: ae
                                    }), (0,
                                    a.jsx)("svg", {
                                        className: "btnWallet arrow",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "8.73",
                                        height: "5.072",
                                        viewBox: "0 0 8.73 5.072",
                                        children: (0,
                                        a.jsx)("path", {
                                            id: "Path_1243",
                                            "data-name": "Path 1243",
                                            d: "M-3638,4744l4.011,4.011,4.012-4.011",
                                            transform: "translate(3638.354 -4743.646)",
                                            fill: "none",
                                            stroke: "#fff",
                                            strokeWidth: "1"
                                        })
                                    })]
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: u()("menuItems", {
                                    showAddress: !B,
                                    "d-none": !M
                                }),
                                children: [(0,
                                a.jsxs)("div", {
                                    onClick: function() {
                                        P(!B)
                                    },
                                    className: u()("menuItems-address", {
                                        showAddress: B
                                    }),
                                    children: [E, (0,
                                    a.jsx)("svg", {
                                        className: "",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "7.188",
                                        height: "12.877",
                                        viewBox: "0 0 7.188 12.877",
                                        children: (0,
                                        a.jsx)("path", {
                                            id: "Path_3613",
                                            "data-name": "Path 3613",
                                            d: "M-3638,4744l5.378,5.378,5.378-5.378",
                                            transform: "translate(4750.128 3639.061) rotate(90)",
                                            fill: "none",
                                            stroke: "#fff",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "1.5"
                                        })
                                    })]
                                }), (0,
                                a.jsxs)("div", {
                                    className: "menuItems-Disconnect",
                                    onClick: function() {
                                        return O()
                                    },
                                    children: ["Disconnect", (0,
                                    a.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "15.363",
                                        height: "16.906",
                                        viewBox: "0 0 15.363 16.906",
                                        children: (0,
                                        a.jsxs)("g", {
                                            id: "Icon_feather-power",
                                            "data-name": "Icon feather-power",
                                            transform: "translate(-3.743 -2.25)",
                                            children: [(0,
                                            a.jsx)("path", {
                                                id: "Path_3611",
                                                "data-name": "Path 3611",
                                                d: "M16.326,9.96a6.932,6.932,0,1,1-9.8,0",
                                                transform: "translate(0 -3.386)",
                                                fill: "none",
                                                stroke: "#fff",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5"
                                            }), (0,
                                            a.jsx)("path", {
                                                id: "Path_3612",
                                                "data-name": "Path 3612",
                                                d: "M18,3v7.7",
                                                transform: "translate(-6.572)",
                                                fill: "none",
                                                stroke: "#fff",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5"
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })
                    })]
                }), (0,
                a.jsxs)("section", {
                    className: "exchange",
                    children: [(0,
                    a.jsx)("div", {
                        className: "img-bg",
                        children: (0,
                        a.jsx)("div", {
                            style: {
                                background: "#000000b8"
                            },
                            className: "bgImg",
                            children: (0,
                            a.jsx)("div", {
                                style: {
                                    opacity: .6
                                }
                            })
                        })
                    }), (0,
                    a.jsxs)("div", {
                        className: "container stakingContainer pt-5",
                        children: [(0,
                        a.jsx)("div", {
                            className: "text-center section-title pt-5",
                            "data-aos": "fade-left",
                            children: (0,
                            a.jsx)("div", {
                                className: "title2",
                                children: (0,
                                a.jsx)("div", {
                                    "data-aos": "fade-left ",
                                    children: "MING-MONG STAKING PLATFORM- FOR NON NFT HOLDERS"
                                                          
                                })
                                

                            })
                        }), (0,
                        a.jsxs)("div", {
                            className: "stakingTable",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "stakingTable_borderBottom",
                                children: [(0,
                                a.jsx)("div", {
                                    className: "stake-card-title blue text-center",
                                    children: "MING Token"
                                }), (0,
                                a.jsx)("div", {
                                    className: "text-center",
                                    children: "Stake Ming to Earn Ming"
                                })]
                            }), (0,
                            a.jsx)("div", {
                                className: "stakingTable_borderBottom",
                                children: (0,
                                a.jsxs)("div", {
                                    className: "row",
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: "col-12 col=md-4",
                                        children: [(0,
                                        a.jsx)("div", {
                                            className: "stakingTitle2",
                                            children: "Token Earned"
                                        }), (0,
                                        a.jsx)("div", {
                                            className: "staking_text",
                                            children: ie.displayReward
                                        }), (0,
                                        a.jsxs)("div", {
                                            className: "staking_text staking_text_light",
                                            children: [oe(ie.displayReward), " USD"]
                                        })]
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "col-12 col-md-4 text-md-center",
                                        children: [(0,
                                        a.jsx)("div", {
                                            className: "stakingTitle2",
                                            children: "APR"
                                        }), (0,
                                        a.jsxs)("div", {
                                            className: "staking_text",
                                            children: [o, "%"]
                                        })]
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "col-12 col-md-4",
                                        children: (0,
                                        a.jsxs)("div", {
                                            className: "rightBlock",
                                            children: [(0,
                                            a.jsx)("div", {
                                                className: "stakingTitle2",
                                                children: "TOTAL STAKED"
                                            }), (0,
                                            a.jsxs)("div", {
                                                className: "staking_text",
                                                children: [null === se || void 0 === se ? void 0 : se.toFormat(0), " MING"]
                                            })]
                                        })
                                    })]
                                })
                            }), (0,
                            a.jsxs)("div", {
                                className: "stakingTable_borderBottom d-md-flex d-block align-self-center justify-content-between",
                                children: [(0,
                                a.jsxs)("div", {
                                    children: [(0,
                                    a.jsx)("div", {
                                        className: "stake-card-title blue mt-0",
                                        children: "YOUR STAKED TOKEN"
                                    }), (0,
                                    a.jsx)("input", {
                                        placeholder: "0.00",
                                        className: "stakingInput",
                                        value: ue.value,
                                        onChange: function(e) {
                                            return ue.setValue(e.target.value)
                                        }
                                    }), (0,
                                    a.jsx)("button", {
                                        onClick: function() {
                                            return ue.selectMaxValue()
                                        },
                                        children: "MAX"
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "stakingTitle2",
                                        children: ["MING Balance: ", ee]
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "stakingTitle2",
                                        children: ["Staked Balance: ", ie.displayAmount]
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "staking_text staking_text_light",
                                        children: ["~", oe(ie.displayAmount), "USD"]
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "staking_text staking_text_light",
                                        children: ["Staked Since: ", null === (e = ie.stakedTime) || void 0 === e ? void 0 : e.days, " Days,", " ", null === (t = ie.stakedTime) || void 0 === t ? void 0 : t.hours, " Hours,", " ", null === (n = ie.stakedTime) || void 0 === n ? void 0 : n.minutes, " Minutes"]
                                    })]
                                }), (0,
                                a.jsxs)("div", {
                                    className: "d-flex flex-column mt-3 mt-md-0 justify-content-center align-items-center",
                                    children: [(0,
                                    a.jsx)("div", {
                                        className: "stakingBtn",
                                        onClick: function() {
                                            return W ? C(ue.getValue()) : L()
                                        },
                                        style: {
                                            cursor: "pointer"
                                        },
                                        children: (0,
                                        a.jsx)("button", {
                                            children: V ? "Stake pending..." : R ? "Approval is Pending.." : W ? "STAKE" : "Approve to stake"
                                        })
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "stakingBtn",
                                        onClick: function() {
                                            var e;
                                            return U(null === (e = ie.amount) || void 0 === e ? void 0 : e.toFixed(0))
                                        },
                                        style: {
                                            cursor: "pointer"
                                        },
                                        children: (0,
                                        a.jsx)("button", {
                                            children: Z ? "Unstaking..." : "Unstake"
                                        })
                                    })]
                                }), (0,
                                a.jsxs)("div", {
                                    className: "d-flex flex-column mt-0  mt-md-0 justify-content-center align-items-center",
                                    children: [(0,
                                    a.jsx)("div", {
                                        className: "stakingBtn",
                                        onClick: function() {
                                            return K()
                                        },
                                        style: {
                                            cursor: "pointer"
                                        },
                                        children: (0,
                                        a.jsx)("button", {
                                            children: q ? "Harvesting..." : "Harvest"
                                        })
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "stakingBtn",
                                        onClick: function() {
                                            var e;
                                            return z(null === (e = ie.reward) || void 0 === e ? void 0 : e.toFixed(0))
                                        },
                                        style: {
                                            cursor: "pointer"
                                        },
                                        children: (0,
                                        a.jsx)("button", {
                                            children: J ? "Compounding..." : "Compound"
                                        })
                                    })]
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                style: {
                                    borderBottom: "none"
                                },
                                className: "stakingTable_borderBottom",
                                children: [(0,
                                a.jsx)("div", {
                                    className: "staking_text staking_text_light mb-2",
                                    children: "*Token withdraw fee:"
                                }), (0,
                                a.jsx)("div", {
                                    className: "staking_text staking_text_light",
                                    children: "90 days - 0%,"
                                }), (0,
                                a.jsx)("div", {
                                    className: "staking_text staking_text_light",
                                    children: "30 - 89 days 1.5%,"
                                }), (0,
                                a.jsx)("div", {
                                    className: "staking_text staking_text_light",
                                    children: "15 - 29 days 4%,"
                                }), (0,
                                a.jsx)("div", {
                                    className: "staking_text staking_text_light",
                                    children: "5 - 14 days 5%,"
                                }), (0,
                                a.jsx)("div", {
                                    className: "staking_text staking_text_light mb-2",
                                    children: "0 - 4 days 8%"
                                }), (0,
                                a.jsx)("div", {
                                    className: "staking_text staking_text_light",
                                    children: "To avoid withdrawal penalty - leave 90 days or more"
                                })]
                            })]
                        })]
                    })]
                })]
            })
        }
    },
    45301: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return n(15744)
        }
        ])
    }
}, function(e) {
    e.O(0, [774, 888, 179], (function() {
        return t = 45301,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
