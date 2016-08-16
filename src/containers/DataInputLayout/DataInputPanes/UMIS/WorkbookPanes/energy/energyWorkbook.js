import React, { PropTypes } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import EnergyDemandJunctions from './DemandJunctions'

type Props = {
  nextSection: PropTypes.func.isRequired,
  prevSection: Proptypes.func,
  saveValues: PropTypes.func
}

let lightingDataGenerator = function (obj) {
  let returnArr = []
  for (var i = 1; i <= state.lighting.length; i++) {
    let refString = 'lighting.' + i + ''
  }
  return returnArr
}
let applianceDataGenerator = function (obj) {
  let returnArr = []

  return returnArr
}
let spaceHeatingDataGenerator = function (obj) {
  let returnArr = []

  return returnArr
}
let ventilationACDataGenerator = function (obj) {
  let returnArr = []

  return returnArr
}
let waterHeatingDataGenerator = function (obj) {
  let returnArr = []

  return returnArr
}
let groundRailTransportDataGenerator = function (obj) {
  let returnArr = []

  return returnArr
}
let airTransportDataGenerator = function (obj) {
  let returnArr = []

  return returnArr
}

class UMISEnergyWorkbook extends React.Component {
  props: Props;
  constructor () {
    super();
    this.state = {
      lighting: [1],
      appliances: [1],
      spaceHeating: [1],
      ventilationAC: [1],
      waterHeating: [1],
      groundRailTransport: [1],
      groundRailTransport: [1]
    }
  }
  addLighting () {

  addLighting (event) {
    let bulbType = this.refs.bulbType.getDOMNode().value
    console.log("Adding lighting " + bulbtype)

    let newAmount = this.state.lighting
    newAmount.push(newAmount.length + 1)
    return this.setState({lighting: newAmount})
  }
  removeLighting () {
    let newAmount = this.state.lighting
    newAmount.pop()
    return this.setState({lighting: newAmount})
  }
  addAppliance () {
    let newAmount = this.state.appliances
    newAmount.push(newAmount.length + 1)
    return this.setState({appliances: newAmount})
  }
  removeAppliance () {
    let newAmount = this.state.appliances
    newAmount.pop()
    return this.setState({appliances: newAmount})
  }
  addSpaceHeating () {
    let newAmount = this.state.spaceHeating
    newAmount.push(newAmount.length + 1)
    return this.setState({spaceHeating: newAmount})
  }
  removeSpaceHeating () {
    let newAmount = this.state.spaceHeating
    newAmount.pop()
    return this.setState({spaceHeating: newAmount})
  }
  addVentilationAC () {
    let newAmount = this.state.ventilationAC
    newAmount.push(newAmount.length + 1)
    return this.setState({ventilationAC: newAmount})
  }
  removeVentilationAC () {
    let newAmount = this.state.ventilationAC
    newAmount.pop()
    return this.setState({ventilationAC: newAmount})
  }
  addWaterHeating () {
    let newAmount = this.state.waterHeating
    newAmount.push(newAmount.length + 1)
    return this.setState({waterHeating: newAmount})
  }
  removeWaterHeating () {
    let newAmount = this.state.waterHeating
    newAmount.pop()
    return this.setState({waterHeating: newAmount})
  }
  addGroundRailTransport () {
    let newAmount = this.state.groundRailTransport
    newAmount.push(newAmount.length + 1)
    return this.setState({groundRailTransport: newAmount})
  }
  removeGroundRailTransport () {
    let newAmount = this.state.groundRailTransport
    newAmount.pop()
    return this.setState({groundRailTransport: newAmount})
  }
  addAirTransport () {

  }
  removeAirTransport () {

  }

  nextSection(e) {
    e.preventDefault()

    let demandObj = this.refs.demandJunctions.refs
    let lightArr = lightingDataGenerator(demandObj, this.state)
    let applianceArr = applianceDataGenerator(demandObj, this.state)
    let spaceHeatingArr = spaceHeatingDataGenerator(demandObj, this.state)
    let ventilationACArr = ventilationACDataGenerator(demandObj, this.state)
    let waterHeatingArr = waterHeatingDataGenerator(demandObj, this.state)
    let groundRailTransport = groundRailTransportDataGenerator(demandObj, this.state)
    let airTransport = airTransportDataGenerator(demandObj, this.state)

    // TODO: save the data from the form
    let data = {
      lighting: {},
      appliances: {},
      spaceHeating: {},
      ventilationAC: {},
      waterHeating: {},
      groundRailTransport: {},
      airTransport: {}
    }

    this.props.saveValues(data)
    this.props.nextSection()
  }

  render () {
    const { lighting, appliances, spaceHeating, ventilationAC, waterHeating, groundRailTransport, airTransport } = this.state
    return (
      <div className='umis-data'>
        <h3 className='umis-data-title'>UMIS Form - Energy Workbook</h3>
        <EnergyDemandJunctions ref='demandJunctions'
          lighting={lighting} appliances={appliances} spaceHeating={spaceHeating} ventilationAC={ventilationAC}
          waterHeating={waterHeating} groundRailTransport={groundRailTransport} airTransport={airTransport}
          addLighting={this.addLighting}
          removeLighting={this.removeLighting}
          addAppliance={this.addAppliance}
          removeAppliance={this.removeAppliance}
          addSpaceHeating={this.addSpaceHeating}
          removeSpaceHeating={this.removeSpaceHeating}
          addVentilationAC={this.addVentilationAC}
          removeVentilationAC={this.removeVentilationAC}
          addWaterHeating={this.addWaterHeating}
          removeWaterHeating={this.removeWaterHeating}
          addGroundRailTransport={this.addGroundRailTransport}
          removeGroundRailTransport={this.removeGroundRailTransport}
          addAirTransport={this.addAirTransport}
          removeAirTransport={this.removeAirTransport}
        />
        <Row>
          <Col xs={6} sm={6} md={6}>
            <Button bsStyle='info' onClick={this.props.prevSection} block>
              <span className='glyphicon glyphicon-circle-arrow-left'></span> Previous Section
            </Button>
          </Col>
          <Col xs={6} sm={6} md={6} >
            <Button bsStyle='success' onClick={this.nextSection} block>
              Next Section <span className='glyphicon glyphicon-circle-arrow-right'></span>
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default UMISEnergyWorkbook
