import { useRouter } from 'next/router'
import React from 'react'
import useAckee from 'use-ackee'

const Ackee: React.FC<{
  ackeeServerUrl: string;
  ackeeDomainId: string;
}> = ({ ackeeServerUrl, ackeeDomainId }) => {
  const router = useRouter()
  useAckee(
    router.asPath,
    { server: ackeeServerUrl, domainId: ackeeDomainId },
    { detailed: false, ignoreLocalhost: true }
  )
  return null
}

export default Ackee
