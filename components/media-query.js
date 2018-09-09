import React, { Component } from 'react'

const { Provider: MediaQueryProvider, Consumer: MediaQueryConsumer } = React.createContext({
  isMobile: false,
  isTablet: false
})

const withMediaQuery = Comp => class extends Component {
  state = {
    isMobile: false,
    isTablet: false
  }
  onResize = () => {
    let isMobile = window.innerWidth < 640
    let isTablet = window.innerWidth < 960
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile })
    }
    if (isTablet !== this.state.isTablet) {
      this.setState({ isTablet })
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }
  render() {
    const { isMobile, isTablet } = this.state

    return <MediaQueryProvider value={{ isMobile, isTablet }}>
      <Comp isMobile={isMobile} isTablet={isTablet} {...this.props} />
    </MediaQueryProvider>
  }
}

export { MediaQueryProvider, MediaQueryConsumer, withMediaQuery }
